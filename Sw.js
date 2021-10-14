const cacheName = 'v1';

// Call Activate Event
self.addEventListener('activate', e => {
    // console.log('Service Worker: Activated');
    // Remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        // console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
    if (e.request.method === 'POST') return;

    // console.log('Service Worker: Fetching');
    e.respondWith(
        fetch(e.request)
            .then(res => {
                // Make copy/clone of response
                const resClone = res.clone();
                // Open cahce
                caches.open(cacheName).then(cache => {
                    // Add response to cache
                    // if (resClone.url) {
                        cache.put(e.request, resClone);
                    // }
                });
                return res;
            })
            .catch(err => caches.match(e.request).then(res => res))
    );
});
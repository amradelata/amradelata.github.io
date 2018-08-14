
            var containerEl = document.querySelector('.container');

            var mixer = mixitup(containerEl);

            

	$(window).scroll(function () {

	// scrollTop button

		let buttonTop = $('.scroll-top');
		if($(window).scrollTop()>=2000){
			buttonTop.fadeIn(500);
			// console.log('dfds')
		}else{
			buttonTop.fadeOut(500);
		}
	});

			 $('.scroll-top').click(function () {

			$('html, body').animate({

				scrollTop:0

			},1000);

			});


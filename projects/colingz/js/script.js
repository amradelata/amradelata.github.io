
// start fixed menu

	// fixed menu
	$('.fixed-menu .fa-bars').on('click', function () {  //When i click on the '.fa-globe' the function start
		console.log($('.fixed-menu'))

		$(this).parent('.fixed-menu').toggleClass('is-visible');    // in '.fixed-menu' put and removeClass 'is-visible'


		if($(this).parent('.fixed-menu').hasClass('is-visible')){    //if '.fixed-menu' hasClass 'is-visible'
  
			$(this).parent('.fixed-menu').animate({                 //'.fixed-menu' left 0
				right: 0	
				}, 500);
			// $('body').animate({
			// 	paddingLeft: '220px'   								//this push the body 
			// }, 500);
		}else{
			$(this).parent('.fixed-menu').animate({
				right: '-240px'	
				// left: '-98%' ...... image 

			}, 500);

			// $('body').animate({                                //this push the body
			// paddingLeft: 0
			// }, 500);
		}
	});
// end fixed menu


let show;

function myFunction() {
    show = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}





$(function () {

	"use strict";

	$('body').css('paddingTop', $('.nav').innerHeight());

		$('.nav li a, .button').click(function (e) {

		$('html, body').animate({
			scrollTop:$('#' + $(this).data('scroll')).offset().top + 50
		},1000);

		// e.preventDefault(); //???
		console.log('#' + $(this).data('scroll'))
	});

		// Add class Active On Navbar link and Remove From Siblings
	$('.nav li a').click(function () {

		$('.nav a').removeClass('active');
		$(this).addClass('active');
		// $(this).addClass('active').siblings().removeClass('active');
	});


	$(window).scroll(function () {
	// in each div had class block do that      scroll navbar links with sections
		$('.block').each(function () {

			if ($(window).scrollTop() > $(this).offset().top){
				// get id attribute to every .block i scroll 
				let blockId = $(this).attr('id');
				// a = id attribute .block then i make concatenation with each other

				$('.nav a').removeClass('active');

				$ ('.nav li a[data-scroll="'+ blockId +'"]').addClass('active');

			}
		});
		// scrollTop button

		let buttonTop = $('.scroll-top');
		if($(window).scrollTop()>=5000){
			buttonTop.fadeIn();
			// console.log('dfds')
		}else{
			buttonTop.fadeOut();
		}


	});






	// nic scroll
	$("html").niceScroll({
		cursorcolor:'#192a56',
		cursorborder:'#F36717'
	});

});




// $(document).ready(function(){
//     $(".aa").mouseover(function(){
//         $(".hid").slideDown();
//     });
    
	
//   	$(".aa").mouseout(function(){
//         $(".hid").slideUp();
//     });
// });
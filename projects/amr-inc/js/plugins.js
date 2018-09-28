$(function () {
	"use strict";


	$(".carousel").carousel({

		interval:5000

	});

	

		// show the color box


		$(".gear-check").click(function () {
			$(".color-option").fadeToggle(500);

		});

		// change color
		 var colorLi = $(".color-option ul li");

		colorLi
		.eq(0).css("backgroundColor","#e41b17").end()
		.eq(1).css("backgroundColor","#E91E63").end()
		.eq(2).css("backgroundColor","#009aff").end()
		.eq(3).css("backgroundColor","#666");

		colorLi.click(function () {
			$("link[href*='theme']").attr("href",$(this).attr("data-value"));

		});
// show and hide .up

	$(window).scroll(function () {

		var sc = $(window).scrollTop();

		if (sc > 700) {

			$(".up").fadeIn(1000);

		} else {

			$(".up").fadeOut(1000);
		}
	});

			// scroll to option-box

		$('.up').click(function () {


			$('html, body').animate({

				scrollTop: $('#myslide').offset().top

			}, 1000)

// #myslide
		});

 
});

		// loading screen


$(window).load(function () {

	$(".loading-overlay .spinner").fadeOut(2000);	
});


// $(document).ready(function(){
//     $(window).load(function(){
//         $(".spinner").hide(2000);
//     });

// });

// $(window).load(function () {
// 	$('.spinner').hide(2000);
// });
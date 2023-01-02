(function ($) {
"use strict";


// artza-preloader
var preloader = document.querySelector(".artza_preloader");
window.addEventListener('load', function(){
  preloader.style.display = 'none';
})

// artza sidebar
if ($(".artza_mobile_nav_toggler").length) {
$(".artza_mobile_nav_toggler").on("click", function (e) {
	e.preventDefault();
	$(".mobile_nav_wrapper").toggleClass("expanded");
});
}

// header-sticky (not-use)
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

// artza meanmenu
$('.artza_menu').meanmenu({
	meanMenuContainer: '.mobile_menu',
	meanScreenWidth: "991"
});

// artza hero-2
let slider_thumb = new Swiper('.hero_2_thumb_active', {
	loop: false,
	spaceBetween: 0,
	slidesPerView: 4,
	rtl: false,
	centeredSlides: false,
	watchSlidesProgress: false,		
	breakpoints: {
		320: {
			slidesPerView: 4,
		},
		576: {
			slidesPerView: 4,

		},
		768: {
			slidesPerView: 4,

		},
		993: {
			slidesPerView: 4,
		},
	}
});

let slider3 = new Swiper('.hero_2_slide_active', {
	loop: true,
	spaceBetween: 0,
	rtl: false,
	slidesPerView: 1,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	thumbs: {
		swiper: slider_thumb,
	},
});

let slider_hero_4_thumb = new Swiper('.hero_4_thumb_active', {
	loop: false,
	spaceBetween: 0,
	slidesPerView: 5,
	rtl: false,
	centeredSlides: false,
	watchSlidesProgress: false,		
	breakpoints: {
		320: {
			slidesPerView: 5,
		},
		576: {
			slidesPerView: 5,

		},
		768: {
			slidesPerView: 5,

		},
		993: {
			slidesPerView: 5,
		},
	}
});

let artza_hero_4_slide = new Swiper('.hero_4_slide_active', {
	loop: true,
	spaceBetween: 0,
	rtl: false,
	slidesPerView: 1,
	// effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	thumbs: {
		swiper: slider_hero_4_thumb,
	},
});


// artza-sponsor-slider

if (jQuery(".artza_sponsor_active").length > 0) {
	let acooterbrand = new Swiper('.artza_sponsor_active', {
		slidesPerView: 4,
		loop: true,
		rtl: false,
		infinite: true,
		autoplay: {
		delay: 4000,
			},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
			slidesPerView: 2,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
		}

});}

// artza-portfolio-active

if (jQuery(".artza_portfolio_slide_active").length > 0) {
	let swiperrecent = new Swiper('.artza_portfolio_slide_active', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		rtl: false,
		infinite: false,
		grabCursor: true,
	
		// If we need pagination
		pagination: {
			el: ".artza_portfolio_progation",
			clickable: true,
			},
			
		// And if we need scrollbar
		breakpoints: {
			0: {
				slidesPerView: 1,
				},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1199: {
				slidesPerView: 3,
			},
		}
	
	});}
	

// artza testimonial-2 

let slider_testimonial_2_thumb = new Swiper('.artza_testimonial_2_thumb_active', {
	loop: true,
	spaceBetween: 0,
	slidesPerView: 1,
	rtl: false,
	centeredSlides: false,
	watchSlidesProgress: true,	
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,

		},
		768: {
			slidesPerView: 1,

		},
		993: {
			slidesPerView: 1,
		},
	}
});
let slider_testimonial_ = new Swiper('.artza_testimonial_2_slide_active', {
	loop: false,
	spaceBetween: 0,
	rtl: false,
	slidesPerView: 1,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	pagination: {
		el: ".artza_testimonial_2_progation",
		clickable: true,
	},
	navigation: {
		nextEl: ".artza_testimonial_2_slide_next",
		prevEl: ".artza_testimonial_2_slide_prev",
	},
	thumbs: {
		swiper: slider_testimonial_2_thumb,
	},
});
 

// artza about-3

let slider_about_thumb = new Swiper('.about_3_thumb_active', {
	loop: false,
	spaceBetween: 0,
	slidesPerView: 5,
	rtl: false,
	centeredSlides: false,
	watchSlidesProgress: false,		
	breakpoints: {
		320: {
			slidesPerView: 5,
		},
		576: {
			slidesPerView: 5,

		},
		768: {
			slidesPerView: 5,

		},
		993: {
			slidesPerView: 5,
		},
	}
});
let artza_about_slide = new Swiper('.about_3_slide_active', {
	loop: true,
	spaceBetween: 0,
	rtl: false,
	slidesPerView: 1,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	thumbs: {
		swiper: slider_about_thumb,
	},
});

// testimonial-3
var swiper = new Swiper(".artza_testimonial_3_active", {
	navigation: {
	  nextEl: ".artza_testimonial_3_slide_next",
	  prevEl: ".artza_testimonial_3_slide_prev",
	},
	pagination: {
	  el: ".artza_testimonial_3_progation",
	  clickable: true,
	},
  });


// team-1 slider

	var team1 = new Swiper('.team_1_slider', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},

	
		// If we need pagination
		pagination: {
			el: ".artza_team_1_progation",
			clickable: true,
		  },

		  navigation: {
			nextEl: ".artza_team_1_slide_next",
			prevEl: ".artza_team_1_slide_prev",
		  },
			
	  });



// pricing-1
 
$(".artza-pricing-box").on("mouseover", function(){
	var current_class = document.getElementsByClassName("artza-pricing-box active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
  });



// pricing-3
 
$(".artza-pricing-3-box").on("mouseover", function(){
	const current = document.getElementsByClassName("artza-pricing-3-box active");
	current[0].className = current[0].className.replace(" active", "");
	this.className += " active";
  });


// services-4
var swiper = new Swiper(".artza_services_4_active", {
	effect: 'fade',
	pagination: {
	  el: ".artza_services_4_progation",
	  clickable: true,
	},
  });



// portfolio-page 


  // init Isotope
var $grid = $('.item_grid').isotope({
	// itemSelector: '.grid-item',
	// options
	masonry: {
			  columnWidth: 1,
			}
  });
  // filter items on button click
  $('.portfolio_page_filter_btns').on( 'click', 'li', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });

  });

  var filterItemA	= $('.portfolio_page_filter_btns li');

		filterItemA.on('click', function(){

			var $this = $(this);

			if ( !$this.hasClass('active')) {

				filterItemA.removeClass('active');

				$this.addClass('active');

			}

		});


//our-work Sortable Masonary with Filters

function enableMasonry1() {

	if($('.our_work_sortable_masonry').length){

		var winDow = $(window);

		// Needed variables

		var $container=$('.our_work_sortable_masonry .items_container');

		var $filter=$('.our_work_filter_btns');

		$container.isotope({

			filter:'*',

			 masonry: {

				columnWidth : 1,
				// columnWidth : '.masonry-item.md-column',
				// columnWidth : '.masonry-item.sm-column',
				// columnWidth : '.masonry-item.xs-column'

			 },

			animationOptions:{

				duration:500,

				easing:'linear'

			}

		});


		// Isotope Filter 

		$filter.find('li').on('click', function(){

			var selector = $(this).attr('data-filter');

			try {

				$container.isotope({ 

					filter	: selector,

					animationOptions: {

						duration: 500,

						easing	: 'linear',

						queue	: false

					}

				});

			} catch(err) {



			}

			return false;

		});


		winDow.on('resize', function(){

			var selector = $filter.find('li.active').attr('data-filter');

			$container.isotope({ 

				filter	: selector,

				animationOptions: {

					duration: 500,

					easing	: 'linear',

					queue	: false

				}

			});

		});


		var filterItemA	= $('.our_work_filter_btns li');

		filterItemA.on('click', function(){

			var $this = $(this);

			if ( !$this.hasClass('active')) {

				filterItemA.removeClass('active');

				$this.addClass('active');

			}

		});

	}

}

enableMasonry1();

// portfolio-4 Sortable Masonary with Filters

function enableMasonry2() {

	if($('.portfolio_4_sortable_masonry').length){

		var winDow = $(window);

		// Needed variables

		var $container=$('.portfolio_4_sortable_masonry .items_container');

		var $filter=$('.portfolio_4_filter_btns');

		$container.isotope({

			filter:'*',

			 masonry: {

				columnWidth : 1,
				// columnWidth : '.masonry-item.md-column',
				// columnWidth : '.masonry-item.sm-column',
				// columnWidth : '.masonry-item.xs-column'

			 },

			animationOptions:{

				duration:500,

				easing:'linear'

			}

		});


		// Isotope Filter 

		$filter.find('li').on('click', function(){

			var selector = $(this).attr('data-filter');

			try {

				$container.isotope({ 

					filter	: selector,

					animationOptions: {

						duration: 500,

						easing	: 'linear',

						queue	: false

					}

				});

			} catch(err) {



			}

			return false;

		});


		winDow.on('resize', function(){

			var selector = $filter.find('li.active').attr('data-filter');

			$container.isotope({ 

				filter	: selector,

				animationOptions: {

					duration: 500,

					easing	: 'linear',

					queue	: false

				}

			});

		});


		var filterItemA	= $('.portfolio_4_filter_btns li');

		filterItemA.on('click', function(){

			var $this = $(this);

			if ( !$this.hasClass('active')) {

				filterItemA.removeClass('active');

				$this.addClass('active');

			}

		});

	}

}

enableMasonry2();

// Active Odometer Counter 
jQuery('.odometer').appear(function (e) {
	var odo = jQuery(".odometer");
	odo.each(function () {
		var countNumber = jQuery(this).attr("data-count");
		jQuery(this).html(countNumber);
	});
});


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	},

	removalDelay: 300,

	// Class that is added to popup wrapper and background
	// make it unique to apply your CSS animations just to this exact popup
	mainClass: 'mfp-fade'

});
/* hero video view */
$('.hero-video-popup').magnificPopup({
	type: 'iframe'
});

$('.karx-lan select, .karx-top-lan-wrapper select').niceSelect();
// data background
$("[data-background").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})
// data width
$("[data-width]").each(function(){
	$(this).css("width",$(this).attr("data-width"))
})
// data background color
$("[data-bg-color]").each(function(){
	$(this).css("background-color",$(this).attr("data-bg-color"))
})

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});


// artza-about-progress-bar acitve
// Jquery Appear raidal


if (typeof ($.fn.knob) != 'undefined') {
	$('.knob').each(function () {
	var $this = $(this),
	knobVal = $this.attr('data-rel');

	$this.knob({
	'draw': function () {
		$(this.i).val(this.cv + '%')
	}
	});

	$this.appear(function () {
	$({
		value: 0
	}).animate({
		value: knobVal
	}, {
		duration: 2000,
		easing: 'swing',
		step: function () {
		$this.val(Math.ceil(this.value)).trigger('change');
		}
	});
	}, {
	accX: 0,
	accY: -150
	});
});
}

// WOW active
new WOW().init();


})(jQuery);
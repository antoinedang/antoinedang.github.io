AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});

$(function(){

	'use strict';

	$(".loader").delay(50).fadeOut("slow");
	$("#overlayer").delay(50).fadeOut("slow");	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
			$('.site-mobile-menu .has-children').each(function(){
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle' : 'collapse',
					'data-target' : '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class' : 'collapse',
					'id' : 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
			var $this = $(this);
			if ( $this.closest('li').find('.collapse').hasClass('show') ) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();  

		});

		$(window).resize(function() {
			var $this = $(this),
			w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
					$('body').find('.js-menu-toggle').removeClass('active');
				}
			}
		});
	}; 
	siteMenuClone();

	var owlPlugin = function() {
		if ( $('.owl-3-slider').length > 0 ) {
			var owl3 = $('.owl-3-slider').owlCarousel({
				loop: true,
				autoHeight: true,
				margin: 20,
				autoplay: false,
				smartSpeed: 700,
				items: 1,
				stagePadding: 0,
				nav: true,
				dots: true,
				navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					800: {
						items:2
					},
					1000:{
						items:2
					},
					1100:{
						items:3
					}
				}
			});
		}
		$('.js-custom-next-v2').click(function(e) {
			e.preventDefault();
			owl3.trigger('next.owl.carousel');
		})
		$('.js-custom-prev-v2').click(function(e) {
			e.preventDefault();
			owl3.trigger('prev.owl.carousel');
		})
		if ( $('.owl-4-slider').length > 0 ) {
			var owl4 = $('.owl-4-slider').owlCarousel({
				loop: true,
				autoHeight: true,
				margin: 10,
				autoplay: true,
				smartSpeed: 700,
				items: 4,
				nav: false,
				dots: true,
				navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					800: {
						items:2
					},
					1000:{
						items:3
					},
					1100:{
						items:4
					}
				}
			});
		}
		

		if ( $('.owl-single-text').length > 0 ) {
			var owlText = $('.owl-single-text').owlCarousel({
				loop: true,
				autoHeight: true,
				margin: 0,
				mouseDrag: false,
				touchDrag: false,
				autoplay: true,
				smartSpeed: 1200,
				items: 1,
				nav: false,
				navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>']
			});
		}
		if ( $('.owl-single').length > 0 ) {
			var owl = $('.owl-single').owlCarousel({
				loop: true,
				autoHeight: true,
				margin: 0,
				autoplay: true,
				smartSpeed: 800,
				mouseDrag: false,
				touchDrag: false,
				items: 1,
				nav: false,
				navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
				onInitialized: counter
			});

			function counter(event) {
				$('.owl-total').text(event.item.count);
			}
			
			$('.js-custom-owl-next').click(function(e) {
				e.preventDefault();
				owl.trigger('next.owl.carousel');
				owlText.trigger('next.owl.carousel');
			})
			$('.js-custom-owl-prev').click(function(e) {
				e.preventDefault();
				owl.trigger('prev.owl.carousel');
				owlText.trigger('prev.owl.carousel');
			})

			$('.owl-dots .owl-dot').each(function(i) {
				$(this).attr('data-index', i - 3);
			});

			owl.on('changed.owl.carousel', function(event) {

				var i = event.item.index;
				if ( i === 1 ) {
					i = event.item.count;
				} else {
					i = i - 1;
				}
				$('.owl-current').text(i);
				$('.owl-total').text(event.item.count);
			})
		}

	}
	owlPlugin();

	var counter = function() {
		
		$('.count-numbers').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ut-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.counter > .number').each(function(){
					var $this = $(this),
					num = $this.data('number');
					$this.animateNumber(
					{
						number: num,
						numberStep: comma_separator_number_step
					}, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	// jarallax
	var jarallaxPlugin = function() {
		if ( $('.jarallax').length > 0 ) {
			$('.jarallax').jarallax({
				speed: 0.2
			});
		}
	};
	jarallaxPlugin();

	

	var accordion = function() {
		$('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
		$('.collapse').on('show.bs.collapse', function () {
			$(this).closest('.accordion-item').addClass('active');
		});

		$('.collapse').on('hidden.bs.collapse', function () {
			$(this).closest('.accordion-item').removeClass('active');
		});
	}
	accordion();

	var links = $('.js-hover-focus-one .service-sm')
	.mouseenter(function(){
		links.addClass('unfocus');
		$(this).removeClass('unfocus');
	}).mouseleave(function(){
		$(this).removeClass('unfocus');
		links.removeClass('unfocus');
	})



	var siteIstotope = function() {
		var $container = $('#posts').isotope({
			itemSelector : '.item',
			isFitWidth: true
		});

		$(window).resize(function(){
			$container.isotope({
				columnWidth: '.col-sm-3'
			});
		});

		$container.isotope({ filter: '*' });

		$('#filters').on( 'click', 'a', function(e) {
			e.preventDefault();
			var filterValue = $(this).attr('data-filter');
			$container.isotope({ filter: filterValue });
			$('#filters a').removeClass('active');
			$(this).addClass('active');
		});

		$container.imagesLoaded()
		.progress( function() {
			$container.isotope('layout');
		})
		.done(function() {
			$('.gsap-reveal-img').each(function() {
				var html = $(this).html();
				$(this).html('<div class="reveal-wrap"><span class="cover"></span><div class="reveal-content">'+html+'</div></div>');
			});

			var controller = new ScrollMagic.Controller();

			var revealImg = $('.gsap-reveal-img');

			if ( revealImg.length ) {
				var i = 0;
				revealImg.each(function() {

					var cover = $(this).find('.cover'),
					revealContent = $(this).find('.reveal-content'),
					img = $(this).find('.reveal-content img');


					var tl2 = new TimelineMax();
					setTimeout(function() {
						tl2
						tl2.set(img, {  scale: '1.2', autoAlpha: 1, })
						.to(cover, 0.2, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
							tl2.set(revealContent, { autoAlpha: 1 });
							tl2.to(cover, 0.2, { marginLeft: '102%', ease:Expo.easeInOut });
							tl2.to(img, 0.4, { scale: '1.0', ease:Linear.easeNone }, '-=2.5');
						} } )

					}, i * 200);



					var scene = new ScrollMagic.Scene({
						triggerElement: this,
						duration: "0%",
						reverse: false,
						offset: "-300%",
					})
					.setTween(tl2)
					.addTo(controller);

					i++;

				});
			}
		})

		$('.js-filter').on('click', function(e) {
			e.preventDefault();
			$('#filters').toggleClass('active');
		});

	}
	siteIstotope();


	var siteGSAPRevealHero = function() {
		var controller = new ScrollMagic.Controller();

		$('.gsap-reveal-hero').each(function() {
			var html = $(this).html();
			$(this).html('<span class="reveal-wrap"><span class="cover"></span><span class="reveal-content">'+html+'</span></span>');
		});
		var grevealhero = $('.gsap-reveal-hero');

		if ( grevealhero.length ) {
			var heroNum = 0;
			grevealhero.each(function() {

				var cover = $(this).find('.cover'),
				revealContent = $(this).find('.reveal-content');

				var tl2 = new TimelineMax();

				setTimeout(function() {

					tl2
					.to(cover, 0.2, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
						tl2.set(revealContent, { x: 0 });
						tl2.to(cover, 0.2, { marginLeft: '102%', ease:Expo.easeInOut });
					} } )
				}, heroNum * 0 );

				var scene = new ScrollMagic.Scene({
					triggerElement: this,
					duration: "0%",
					reverse: false,
					offset: "-300%",
				})
				.setTween(tl2)
				.addTo(controller);

				heroNum++;
			});
		}
	}
	siteGSAPRevealHero();

	var animateElementsScript = function() {
		function animateElements() {
			$('.progressbar').each(function () {
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var percent = $(this).find('.circle').attr('data-percent');
				var percentage = parseInt(percent, 10) / parseInt(100, 10);
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						startAngle: -Math.PI / 2,
						value: percent / 100,
						thickness: 4,
						fill: {
							color: '#000000'
						}
					}).on('circle-animation-progress', function (event, progress, stepValue) {
						$(this).find('div').text((stepValue*100).toFixed(0) + "%");
					}).stop();
				}
			});
		}

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);

};
animateElementsScript();



var OnePageNavigation = function() {
	var navToggler = $('.site-menu-toggle');
	$("body").on("click", ".site-nav-wrap li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {
		e.preventDefault();
		var hash = this.hash;

		$('html, body').animate({

			scrollTop: $(hash).offset().top
		}, 400, 'easeInOutExpo', function(){
			window.location.hash = hash;
		});

	});


};
OnePageNavigation();


// load ajax page
var portfolioItemClick = function() {
	$('.ajax-load-page').on('click', function(e) {

		var id = $(this).data('id'),
		href = $(this).attr('href');

		if ( $('#portfolio-single-holder > div').length ) {
			$('#portfolio-single-holder > div').remove();
		} 

		TweenMax.to('.loader-portfolio-wrap', 1, { top: '-50px', autoAlpha: 1, display: 'block', ease: Power4.easeOut });

		setTimeout(function() {
			$('html, body').animate({
				scrollTop: $('#portfolio-section').offset().top - 50

			}, 700, 'easeInOutExpo', function() {
			});
		}, 200);
		

		setTimeout(function(){
			loadPortfolioSinglePage(id, href);
		}, 100);

		e.preventDefault();

	});

	// Close
	$('body').on('click', '.js-close-portfolio', function() {

		setTimeout(function(){
			$('html, body').animate({
				scrollTop: $('#portfolio-section').offset().top - 50
			}, 700, 'easeInOutExpo');
		}, 200);

		TweenMax.set('.portfolio-wrapper', { visibility: 'visible', height: 'auto' });
		TweenMax.to('.portfolio-single-inner', 1, { marginTop: '50px', opacity: 0,  display: 'none', onComplete() {
			TweenMax.to('.portfolio-wrapper', 1, { marginTop: '0px', autoAlpha: 1, position: 'relative' });

		} });
		
	});
};

$(document).ajaxStop(function(){
	setTimeout(function(){
		TweenMax.to('.loader-portfolio-wrap', 1, { top: '0px', autoAlpha: 0, ease: Power4.easeOut });	
	}, 400);
});

var loadPortfolioSinglePage = function(id, href) {
	$.ajax({
		url: href,
		type: 'GET',
		success: function(html) {

			TweenMax.to('.portfolio-wrapper', 1, { marginTop: '50px', autoAlpha: 0, visibility: 'hidden', onComplete() {
				TweenMax.set('.portfolio-wrapper', { height: 0 });
			} })

			var pSingleHolder = $('#portfolio-single-holder');
			
			var getHTMLContent = $(html).find('.portfolio-single-wrap').html();

			pSingleHolder.append(
				'<div id="portfolio-single-'+id+
				'" class="portfolio-single-inner"><span class="unslate_co--close-portfolio js-close-portfolio d-flex align-items-center"><span class="icon-close2 wrap-icon-close"></span></span>' + getHTMLContent + '</div>'
				);

			setTimeout(function() {
				owlSingleSlider();
				$('html, body').animate({
					scrollTop: $('#portfolio-section').offset().top - 50

				}, 700, 'easeInOutExpo', function() {
				});
			}, 10);

			setTimeout(function() {
				TweenMax.set('.portfolio-single-inner', { marginTop: '100px', autoAlpha: 0, display: 'none' });
				TweenMax.to('.portfolio-single-inner', .5, { marginTop: '0px', autoAlpha: 1, display: 'block', onComplete() {

					TweenMax.to('.loader-portfolio-wrap', 1, { top: '0px', autoAlpha: 0, ease: Power4.easeOut });	
				} });
			}, 700 );
		}
	});

	return false;

};

portfolioItemClick();



var owlSingleSlider = function () {
	if ( $( '.single-slider' ).length ) {
		$('.single-slider').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			smartSpeed: 1500,
			autoplay: true,
			autoHeight: true,
			autoplayHoverPause: true,
			dots: true,
			nav: true,
			navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],

			responsive:{
				400:{
					stagePadding: 0,
					margin: 0,
				},
				600:{
					stagePadding: 0,
					margin: 0,
				}
			}
		});
	}
}


})





const element = document.querySelector('.little_robot');
const touch_element = document.querySelector('.robot-touch');
var step_time = 500;
var time_between_steps = 50;
var step_size = 20;
var time_between_robots = 5000;
var child_step_time = 300;
var child_time_between_steps = 30;
var child_step_size = 12;

var robot0_time_multiplier = 1;
var robot1_time_multiplier = 1;
var robot2_time_multiplier = 1;
var robot3_time_multiplier = 1;
var robot4_time_multiplier = 1;
var robot5_time_multiplier = 1;
var robot6_time_multiplier = 1;
var robot7_time_multiplier = 1;

function moveRobotBackToBeginning() {
	element.style.left = `105%`;
	touch_element.style.left = `105%`;
	setTimeout(takeOneRobotStep, (step_time+time_between_steps)/robot0_time_multiplier);
}

function takeOneRobotStep() {
	const px_to_percent = 100 / window.innerWidth;
	const currentLeft = isNaN(parseFloat(element.style.left)) ? 105 : parseFloat(element.style.left);
	element.style.left = `${currentLeft - px_to_percent*step_size}%`;
	touch_element.style.left = element.style.left;
	if (currentLeft < -300*px_to_percent) {
		element.style.bottom = '-500px';
		element.style.opacity = '0';
		touch_element.style.bottom = element.style.bottom;
		setTimeout(moveRobotBackToBeginning, (step_time+time_between_steps)/robot0_time_multiplier);
	} else {
		element.style.bottom = '-7px';
		element.style.opacity = '1';
		touch_element.style.bottom = element.style.bottom;
		setTimeout(takeOneRobotStep, (step_time+time_between_steps)/robot0_time_multiplier);
	}
}

setTimeout(takeOneRobotStep, (time_between_steps));

const ChildRobot1_element = document.querySelector('.ChildRobot1');

function moveChildRobot1BackToBeginning() {
	ChildRobot1_element.style.left = '105%'
	setTimeout(ChildRobot1TakeOneStep, (child_step_time+child_time_between_steps)/robot1_time_multiplier);
}

function ChildRobot1TakeOneStep() {
	const px_to_percent = 100 / window.innerWidth;
	const currentLeft = isNaN(parseFloat(ChildRobot1_element.style.left)) ? 105 : parseFloat(ChildRobot1_element.style.left);
	ChildRobot1_element.style.left = `${currentLeft - px_to_percent*child_step_size}%`; 
	if (currentLeft < -300*px_to_percent) {
		ChildRobot1_element.style.bottom = '-500px';
		ChildRobot1_element.style.opacity = '0';
		setTimeout(moveChildRobot1BackToBeginning, (step_time+time_between_steps)/robot1_time_multiplier);
	} else {
		ChildRobot1_element.style.bottom = '-4px';
		ChildRobot1_element.style.opacity = '1';
		setTimeout(ChildRobot1TakeOneStep, (child_step_time+child_time_between_steps)/robot1_time_multiplier);
	}
}

setTimeout(ChildRobot1TakeOneStep, time_between_robots);


const ChildRobot2_element = document.querySelector('.ChildRobot2');

function moveChildRobot2BackToBeginning() {
	ChildRobot2_element.style.left = '105%'
	setTimeout(ChildRobot2TakeOneStep, (child_step_time+child_time_between_steps)/robot2_time_multiplier);
}

function ChildRobot2TakeOneStep() {
	const px_to_percent = 100 / window.innerWidth;
	const currentLeft = isNaN(parseFloat(ChildRobot2_element.style.left)) ? 105 : parseFloat(ChildRobot2_element.style.left);
	ChildRobot2_element.style.left = `${currentLeft - px_to_percent*child_step_size}%`; 
	if (currentLeft < -300*px_to_percent) {
		ChildRobot2_element.style.bottom = '-500px';
		ChildRobot2_element.style.opacity = '0';
		setTimeout(moveChildRobot2BackToBeginning, (step_time+time_between_steps)/robot2_time_multiplier);
	} else {
		ChildRobot2_element.style.bottom = '-4px';
		ChildRobot2_element.style.opacity = '1';
		setTimeout(ChildRobot2TakeOneStep, (child_step_time+child_time_between_steps)/robot2_time_multiplier);
	}
}

setTimeout(ChildRobot2TakeOneStep, 2 * time_between_robots);

const ChildRobot3_element = document.querySelector('.ChildRobot3');

function moveChildRobot3BackToBeginning() {
	ChildRobot3_element.style.left = '105%'
	setTimeout(ChildRobot3TakeOneStep, (child_step_time+child_time_between_steps)/robot3_time_multiplier);
}

function ChildRobot3TakeOneStep() {
	const px_to_percent = 100 / window.innerWidth;
	const currentLeft = isNaN(parseFloat(ChildRobot3_element.style.left)) ? 105 : parseFloat(ChildRobot3_element.style.left);
	ChildRobot3_element.style.left = `${currentLeft - px_to_percent*child_step_size}%`; 
	if (currentLeft < -300*px_to_percent) {
		ChildRobot3_element.style.bottom = '-500px';
		ChildRobot3_element.style.opacity = '0';
		setTimeout(moveChildRobot3BackToBeginning, (step_time+time_between_steps)/robot3_time_multiplier);
	} else {
		ChildRobot3_element.style.bottom = '-4px';
		ChildRobot3_element.style.opacity = '1';
		setTimeout(ChildRobot3TakeOneStep, (child_step_time+child_time_between_steps)/robot3_time_multiplier);
	}
}

setTimeout(ChildRobot3TakeOneStep, 3 * time_between_robots);

const ChildRobot4_element = document.querySelector('.ChildRobot4');

function moveChildRobot4BackToBeginning() {
	ChildRobot4_element.style.left = '105%'
	setTimeout(ChildRobot4TakeOneStep, (child_step_time+child_time_between_steps)/robot4_time_multiplier);
}

function ChildRobot4TakeOneStep() {
	const px_to_percent = 100 / window.innerWidth;
	const currentLeft = isNaN(parseFloat(ChildRobot4_element.style.left)) ? 105 : parseFloat(ChildRobot4_element.style.left);
	ChildRobot4_element.style.left = `${currentLeft - px_to_percent*child_step_size}%`; 
	if (currentLeft < -300*px_to_percent) {
		ChildRobot4_element.style.bottom = '-500px';
		ChildRobot4_element.style.opacity = '0';
		setTimeout(moveChildRobot4BackToBeginning, (step_time+time_between_steps)/robot4_time_multiplier);
	} else {
		ChildRobot4_element.style.bottom = '-4px';
		ChildRobot4_element.style.opacity = '1';
		setTimeout(ChildRobot4TakeOneStep, (child_step_time+child_time_between_steps)/robot4_time_multiplier);
	}
}

setTimeout(ChildRobot4TakeOneStep, 4 * time_between_robots);

const ChildRobot5_element = document.querySelector('.ChildRobot5');

function moveChildRobot5BackToBeginning() {
	ChildRobot5_element.style.left = '105%'
	setTimeout(ChildRobot5TakeOneStep, (child_step_time+child_time_between_steps)/robot5_time_multiplier);
}

function ChildRobot5TakeOneStep() {
	const px_to_percent = 100 / window.innerWidth;
	const currentLeft = isNaN(parseFloat(ChildRobot5_element.style.left)) ? 105 : parseFloat(ChildRobot5_element.style.left);
	ChildRobot5_element.style.left = `${currentLeft - px_to_percent*child_step_size}%`; 
	if (currentLeft < -300*px_to_percent) {
		ChildRobot5_element.style.bottom = '-500px';
		ChildRobot5_element.style.opacity = '0';
		setTimeout(moveChildRobot5BackToBeginning, (step_time+time_between_steps)/robot5_time_multiplier);
	} else {
		ChildRobot5_element.style.bottom = '-4px';
		ChildRobot5_element.style.opacity = '1';
		setTimeout(ChildRobot5TakeOneStep, (child_step_time+child_time_between_steps)/robot5_time_multiplier);
	}
}

setTimeout(ChildRobot5TakeOneStep, 5 * time_between_robots);

const ChildRobot6_element = document.querySelector('.ChildRobot6');

function moveChildRobot6BackToBeginning() {
	ChildRobot6_element.style.left = '105%'
	setTimeout(ChildRobot6TakeOneStep, (child_step_time+child_time_between_steps)/robot6_time_multiplier);
}

function ChildRobot6TakeOneStep() {
	const px_to_percent = 100 / window.innerWidth;
	const currentLeft = isNaN(parseFloat(ChildRobot6_element.style.left)) ? 105 : parseFloat(ChildRobot6_element.style.left);
	ChildRobot6_element.style.left = `${currentLeft - px_to_percent*child_step_size}%`; 
	if (currentLeft < -300*px_to_percent) {
		ChildRobot6_element.style.bottom = '-500px';
		ChildRobot6_element.style.opacity = '0';
		setTimeout(moveChildRobot6BackToBeginning, (step_time+time_between_steps)/robot6_time_multiplier);
	} else {
		ChildRobot6_element.style.bottom = '-4px';
		ChildRobot6_element.style.opacity = '1';
		setTimeout(ChildRobot6TakeOneStep, (child_step_time+child_time_between_steps)/robot6_time_multiplier);
	}
}

setTimeout(ChildRobot6TakeOneStep, 6 * time_between_robots);

const ChildRobot7_element = document.querySelector('.ChildRobot7');

function moveChildRobot7BackToBeginning() {
	ChildRobot7_element.style.left = '105%'
	setTimeout(ChildRobot7TakeOneStep, (child_step_time+child_time_between_steps)/robot7_time_multiplier);
}

function ChildRobot7TakeOneStep() {
	const px_to_percent = 100 / window.innerWidth;
	const currentLeft = isNaN(parseFloat(ChildRobot7_element.style.left)) ? 105 : parseFloat(ChildRobot7_element.style.left);
	ChildRobot7_element.style.left = `${currentLeft - px_to_percent*child_step_size}%`; 
	if (currentLeft < -300*px_to_percent) {
		ChildRobot7_element.style.bottom = '-500px';
		ChildRobot7_element.style.opacity = '0';
		setTimeout(moveChildRobot7BackToBeginning, (step_time+time_between_steps)/robot7_time_multiplier);
	} else {
		ChildRobot7_element.style.bottom = '-4px';
		ChildRobot7_element.style.opacity = '1';
		setTimeout(ChildRobot7TakeOneStep, (child_step_time+child_time_between_steps)/robot7_time_multiplier);
	}
}

setTimeout(ChildRobot7TakeOneStep, 7 * time_between_robots);

const impact_element = document.querySelector('.impact-jolt');
const spark_element = document.querySelector('.impact-break');

var touch_element_opacity = 1;

function spawnImpact(event) {
	impact_element.style.left = `${event.clientX}px`;
	impact_element.style.top = `${event.clientY}px`;
	impact_element.stop();
	impact_element.play();
	touch_element.style.opacity = `${touch_element_opacity - 0.5}`;
	touch_element_opacity -= 0.5;
}

function spawnSparkImpact(event) {
	spark_element.style.left = `${event.clientX}px`;
	spark_element.style.top = `${event.clientY}px`;
	spark_element.stop();
	spark_element.play();
	touch_element.style.opacity = `${touch_element_opacity - 0.5}`;
	touch_element_opacity -= 0.5;
}

element.addEventListener('click', (event) => {
	if (robot0_time_multiplier == 1) {
		spawnImpact(event);
		element.setSpeed(2);
		robot0_time_multiplier = 2;
		element.style.transition = "left 0.25s linear";
	} else {
		spawnSparkImpact(event);
		element.setSpeed(1);
		robot0_time_multiplier = 1;
		element.style.transition = "left 0.5s linear";
	}
});
element.addEventListener('tap', (event) => {
	if (robot0_time_multiplier == 1) {
		spawnImpact(event);
		element.setSpeed(2);
		robot0_time_multiplier = 2;
		element.style.transition = "left 0.25s linear";
	} else {
		spawnSparkImpact(event);
		element.setSpeed(1);
		robot0_time_multiplier = 1;
		element.style.transition = "left 0.5s linear";
	}
});

ChildRobot1_element.addEventListener('click', (event) => {
	touch_element_opacity = 0;;
	if (robot1_time_multiplier == 1) {
		spawnImpact(event);
		ChildRobot1_element.setSpeed(3);
		robot1_time_multiplier = 2;
		ChildRobot1_element.style.transition = "left 0.125s linear";
	} else {
		spawnSparkImpact(event);
		ChildRobot1_element.setSpeed(1.5);
		robot1_time_multiplier = 1;
		ChildRobot1_element.style.transition = "left 0.25s linear";
	}
});
ChildRobot1_element.addEventListener('tap', (event) => {
	touch_element_opacity = 0;;
	if (robot1_time_multiplier == 1) {
		spawnImpact(event);
		ChildRobot1_element.setSpeed(3);
		robot1_time_multiplier = 2;
		ChildRobot1_element.style.transition = "left 0.125s linear";
	} else {
		spawnSparkImpact(event);
		ChildRobot1_element.setSpeed(1.5);
		robot1_time_multiplier = 1;
		ChildRobot1_element.style.transition = "left 0.25s linear";
	}
});

ChildRobot2_element.addEventListener('click', (event) => {
	touch_element_opacity = 0;;
	if (robot2_time_multiplier == 1) {
		spawnImpact(event);
		ChildRobot2_element.setSpeed(3);
		robot2_time_multiplier = 2;
		ChildRobot2_element.style.transition = "left 0.125s linear";
	} else {
		spawnSparkImpact(event);
		ChildRobot2_element.setSpeed(1.5);
		robot2_time_multiplier = 1;
		ChildRobot2_element.style.transition = "left 0.25s linear";
	}
});
ChildRobot2_element.addEventListener('tap', (event) => {
	touch_element_opacity = 0;;
	if (robot2_time_multiplier == 1) {
		spawnImpact(event);
		ChildRobot2_element.setSpeed(3);
		robot2_time_multiplier = 2;
		ChildRobot2_element.style.transition = "left 0.125s linear";
	} else {
		spawnSparkImpact(event);
		ChildRobot2_element.setSpeed(1.5);
		robot2_time_multiplier = 1;
		ChildRobot2_element.style.transition = "left 0.25s linear";
	}
});

ChildRobot3_element.addEventListener('click', (event) => {
	touch_element_opacity = 0;;
	if (robot3_time_multiplier == 1) {
		spawnImpact(event);
		ChildRobot3_element.setSpeed(3);
		robot3_time_multiplier = 2;
		ChildRobot3_element.style.transition = "left 0.125s linear";
	} else {
		spawnSparkImpact(event);
		ChildRobot3_element.setSpeed(1.5);
		robot3_time_multiplier = 1;
		ChildRobot3_element.style.transition = "left 0.25s linear";
	}
});
ChildRobot3_element.addEventListener('tap', (event) => {
	touch_element_opacity = 0;;
	if (robot3_time_multiplier == 1) {
		spawnImpact(event);
		ChildRobot3_element.setSpeed(3);
		robot3_time_multiplier = 2;
		ChildRobot3_element.style.transition = "left 0.125s linear";
	} else {
		spawnSparkImpact(event);
		ChildRobot3_element.setSpeed(1.5);
		robot3_time_multiplier = 1;
		ChildRobot3_element.style.transition = "left 0.25s linear";
	}
});

ChildRobot4_element.addEventListener('click', (event) => {
	touch_element_opacity = 0;;
	if (robot4_time_multiplier == 1) {
		spawnImpact(event);
		ChildRobot4_element.setSpeed(3);
		robot4_time_multiplier = 2;
		ChildRobot4_element.style.transition = "left 0.125s linear";
	} else {
		spawnSparkImpact(event);
		ChildRobot4_element.setSpeed(1.5);
		robot4_time_multiplier = 1;
		ChildRobot4_element.style.transition = "left 0.25s linear";
	}
});
ChildRobot4_element.addEventListener('tap', (event) => {
	touch_element_opacity = 0;;
	if (robot4_time_multiplier == 1) {
		spawnImpact(event);
		ChildRobot4_element.setSpeed(3);
		robot4_time_multiplier = 2;
		ChildRobot4_element.style.transition = "left 0.125s linear";
	} else {
		spawnSparkImpact(event);
		ChildRobot4_element.setSpeed(1.5);
		robot4_time_multiplier = 1;
		ChildRobot4_element.style.transition = "left 0.25s linear";
	}
});

ChildRobot5_element.addEventListener('click', (event) => {
	touch_element_opacity = 0;;
	if (robot5_time_multiplier == 1) {
		spawnImpact(event);
		ChildRobot5_element.setSpeed(3);
		robot5_time_multiplier = 2;
		ChildRobot5_element.style.transition = "left 0.125s linear";
	} else {
		spawnSparkImpact(event);
		ChildRobot5_element.setSpeed(1.5);
		robot5_time_multiplier = 1;
		ChildRobot5_element.style.transition = "left 0.25s linear";
	}
});
ChildRobot5_element.addEventListener('tap', (event) => {
	touch_element_opacity = 0;;
	if (robot5_time_multiplier == 1) {
		spawnImpact(event);
		ChildRobot5_element.setSpeed(3);
		robot5_time_multiplier = 2;
		ChildRobot5_element.style.transition = "left 0.125s linear";
	} else {
		spawnSparkImpact(event);
		ChildRobot5_element.setSpeed(1.5);
		robot5_time_multiplier = 1;
		ChildRobot5_element.style.transition = "left 0.25s linear";
	}
});

ChildRobot6_element.addEventListener('click', (event) => {
	touch_element_opacity = 0;;
	if (robot6_time_multiplier == 1) {
		spawnImpact(event);
		ChildRobot6_element.setSpeed(3);
		robot6_time_multiplier = 2;
		ChildRobot6_element.style.transition = "left 0.125s linear";
	} else {
		spawnSparkImpact(event);
		ChildRobot6_element.setSpeed(1.5);
		robot6_time_multiplier = 1;
		ChildRobot6_element.style.transition = "left 0.25s linear";
	}
});
ChildRobot6_element.addEventListener('tap', (event) => {
	touch_element_opacity = 0;;
	if (robot6_time_multiplier == 1) {
		spawnImpact(event);
		ChildRobot6_element.setSpeed(3);
		robot6_time_multiplier = 2;
		ChildRobot6_element.style.transition = "left 0.125s linear";
	} else {
		spawnSparkImpact(event);
		ChildRobot6_element.setSpeed(1.5);
		robot6_time_multiplier = 1;
		ChildRobot6_element.style.transition = "left 0.25s linear";
	}
});

ChildRobot7_element.addEventListener('click', (event) => {
	touch_element_opacity = 0;;
	if (robot7_time_multiplier == 1) {
		spawnImpact(event);
		ChildRobot7_element.setSpeed(3);
		robot7_time_multiplier = 2;
		ChildRobot7_element.style.transition = "left 0.125s linear";
	} else {
		spawnSparkImpact(event);
		ChildRobot7_element.setSpeed(1.5);
		robot7_time_multiplier = 1;
		ChildRobot7_element.style.transition = "left 0.25s linear";
	}
});
ChildRobot7_element.addEventListener('tap', (event) => {
	touch_element_opacity = 0;;
	if (robot7_time_multiplier == 1) {
		spawnImpact(event);
		ChildRobot7_element.setSpeed(3);
		robot7_time_multiplier = 2;
		ChildRobot7_element.style.transition = "left 0.125s linear";
	} else {
		spawnSparkImpact(event);
		ChildRobot7_element.setSpeed(1.5);
		robot7_time_multiplier = 1;
		ChildRobot7_element.style.transition = "left 0.25s linear";
	}
});

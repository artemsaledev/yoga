$('.trigger').on('click', function() {
    $('.modal-wrapper').toggleClass('open');
    return false;
});

$('.head').on('click', function (){
    $('.modal-wrapper').removeClass('open');
})

$('#click-to-close').on('click', function (){
    $('.modal-wrapper').removeClass('open');
})

if ($(window).width() < 787) {

var $navButton = $('.nav-trigger');
var $navMenu = $('.main-nav');
var $navModal = $('.main-nav__modal');
var $navItem = $('.nav-list__item');
var $mainContent = $('.content-wrapper');

$navButton.on("click", function() {
  $navButton.toggleClass('nav-trigger--nav-is-visible');
  $navModal.toggleClass('main-nav__modal--open');
  $navMenu.toggleClass('main-nav-active');
  $mainContent.toggleClass('main-content--nav-active');
});

$navItem.on("click", function() {
  $navItem.removeClass('toggle-active');
  $navButton.toggleClass('nav-trigger--nav-is-visible');
  $navModal.toggleClass('main-nav__modal--open');
  $navMenu.toggleClass('main-nav-active');
  $mainContent.toggleClass('main-content--nav-active');
  $(this).addClass('toggle-active');
});

};

	var aboutPrevSlider = function() {
		aboutPrevSlider = $('.js-about-us-slider');

		aboutPrevSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '.slider-nav--prev',
			nextArrow: '.slider-nav--next',
			autoplay: true,
			autoplaySpeed: 4000,
			infinite: true,
			adaptiveHeight: true
		})
	};

aboutPrevSlider();

// var popularCategoriesSlider = function () {
// 		var sliderElement = $('.js-categories-prev');

// 		if($(window).width() < 768 && !(sliderElement.hasClass('slick-initialized'))) {
// 			sliderElement.slick({
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 			})
// 		} else if ($(window).width() > 768 && (sliderElement.hasClass('slick-initialized'))) {
// 			sliderElement.slick('unslick')
// 		}
// 	};

// $(window).on('resize',function() {
// 	popularCategoriesSlider();
// });
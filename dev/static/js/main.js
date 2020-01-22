$('.trigger').on('click', function() {
    $('.modal-wrapper').toggleClass('open');
    return false;
});

$('select').styler();

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

$(".scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 97
    }, 800);
});

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
		})
	};

	var recTrainerSlider = function() {
		recTrainerSlider = $('.js-recommendation-prev');

		recTrainerSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			// autoplay: true,
			arrows: false,
			adaptiveHeight: true,
			autoplaySpeed: 4000,
			asNavFor: '.js-next-advice-prev',
			dots: true,
			dotsClass: "my-dots",
		})
	};

	var nextAdviceSlider = function() {
		nextAdviceSlider = $('.js-next-advice-prev');

		nextAdviceSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '.rec-slider--prev',
			nextArrow: '.rec-slider--next',
			// autoplay: true,
			autoplaySpeed: 4000,
			asNavFor: '.js-recommendation-prev',
		})
	};

$('.zoom-photo').on('click', function (e) {
    e.preventDefault();
    var $alt = $(this).siblings(".fancybox");
    $alt.addClass('select-im');
    if($alt.hasClass('select-im')) {
	    $.fancybox.open($('.select-im'));
	    $alt.removeClass('select-im');
    }
});

$(".fancybox").fancybox({
		openEffect	: 'none',
	    closeEffect	: 'none',
	    closeClick	: true,
		helpers:  {
	        title:  null
	    },
	    overlay : {
	            css : {
	                'background' : 'rgba(255,255,255,0.5)'
	            }
	        }
	});


aboutPrevSlider();
recTrainerSlider();
nextAdviceSlider();

$('#form').validate({
	rules: {
		name: {
			required: true,
			minlength: 2
		}, 
		phone: {
			required: true,
			digits: true,
			minlength: 10,
			maxlength: 12,
			number: true
		}
	},
	messages: {
		name: {
			required: "Поле заполнено не верно или не содержит данных",
			minlength: "Вводите не менее 2х символов",
			},
		phone: {
			required: "Введите номер мобильного!",
			minlength: "В Украине не менее 10 цифр, без +",
			maxlength: "Возможно указали лишние цифры?",
			digits: "Вводите целые числа, без символов",
		}
	},
	focusInvalid: true,
	errorClass: "input_error",
});

$('#form').submit(function(e){     

    e.preventDefault();
    var $form = $(this);
   	var user_name 	 = $('#user_name').val();
	var user_phone 	 = $('#user_phone').val();
	var text_comment = $('#text_comment').val();

  // check if the input is valid
    if(! $form.valid()) return false;
	$.ajax({
	    url: "action.php",
		type: "post",
		dataType: "json",
	    data: {
			"user_name": user_name,
			"user_phone": user_phone,
			"text_comment": text_comment
		},
	    success: function(data){
			$('.messages').html(data.result);
		}
	});
});
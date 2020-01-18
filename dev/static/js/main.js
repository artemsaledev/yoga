$('#scroll', '#scroll-nav').customScroll({
  prefix: 'custom-scroll-pretty_',
});

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
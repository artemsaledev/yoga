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

var $easyzoom = $('.easyzoom');
 $(function () {
    if($(window).width() > 1024) {
    }
  });
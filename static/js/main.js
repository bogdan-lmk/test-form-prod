$(document).ready(function () {
    svg4everybody({});
});


function checkForInput(element) {


  if ($('.info-field--location').val().length > 0) {
    $('.name-field').addClass('name-field--active');
  } else {
    $('.name-field').removeClass('name-field--active');
  }
}

$('.info-field--location').each(function() {
  checkForInput(this);
});

// The lines below (inside) are executed on change & keyup
$('.info-field--location').on('change keyup', function() {
  checkForInput(this);
});

$('.custom-option-current').on('click',function(){
  $('.custom-option-list').toggleClass('custom-option-list--closed');
  $('.icon-up-arrow').toggleClass('icon-wrap--arrow-reverse');
})


$(".contact-link--info").click(function() {
    $('html,body').animate({
        scrollTop: $(".container-custom--info").offset().top},
        'slow');
});

$(".contact-link--experience").click(function() {
    $('html,body').animate({
        scrollTop: $(".container-custom--experience").offset().top},
        'slow');
});

$(".contact-link--about").click(function() {
    $('html,body').animate({
        scrollTop: $(".container-custom--about").offset().top},
        'slow');
});

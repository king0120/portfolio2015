// jshint devel:true
console.log('\'Allo \'Allo!');

$(document).ready(function() {
  $('.slider').hover(function(){
    $('#x').fadeIn('slow');
  },function(){
    $('#x').fadeOut('slow');
  });
  $('.slider').click(function() {
  
    if ($('.portfolio').hasClass('slideout')) {

      $('.portfolio').addClass('slidein');
      $('.portfolio').removeClass('slideout');
    } else {
      $('.portfolio').addClass('slideout');
      $('.portfolio').removeClass('slidein');
    }
  });
  $('.wrapper').hover(function() {
    $('.hoverText').addClass('darkBackground');

  }, function() {
    $('p').removeClass('darkBackground');
  });
  var scrollr='html, body';
  $('#home').click(function(a){
    a.preventDefault();
  $(scrollr).animate({
    scrollTop: $(".header").offset().top
}, 2000);
});
  $('#about').click(function(a){
    a.preventDefault();
  $(scrollr).animate({
    scrollTop: $(".aboutMe").offset().top
}, 2000);
});
  $('#exp').click(function(a){
    a.preventDefault();
  $(scrollr).animate({
    scrollTop: $(".expertise").offset().top
}, 2000);
});
  $('#sample').click(function(a){
    a.preventDefault();
  $(scrollr).animate({
    scrollTop: $(".folio").offset().top
}, 2000);
});
  $('#contact').click(function(a){
    a.preventDefault();
  $(scrollr).animate({
    scrollTop: $(".contact").offset().top
}, 2000);
});
});
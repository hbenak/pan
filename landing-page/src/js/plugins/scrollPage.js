import $ from 'jquery'

$(document).on('click touchstart', '#about', function(e) {
  e.preventDefault();
  goTo('container-video');
});

$(document).on('click touchstart', '#careers', function(e) {
  e.preventDefault();
  goTo('container-solution');
});

$(document).on('click touchstart', '#contact', function(e) {
  e.preventDefault();
  goTo('container-email-ads');
});

let goTo = (el) => {
  let topBox = $('.'+el).offset().top - 10;
  $('html, body').stop().animate({scrollTop: topBox}, 500, 'linear');
}
// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

//= require holder

$(document).ready(function() {
  $('.carousel.carousel-slider').carousel({fullWidth: false});
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 8000);
});


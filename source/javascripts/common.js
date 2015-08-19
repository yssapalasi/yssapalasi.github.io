$(".nav-button").on('click', function() {
  $(this).toggleClass('close');
  $(this).parent().toggleClass('dark');
  $(".nav").toggleClass('visible');
});

$(".nav li").on('click', function() {
  $(".nav").removeClass('visible');
  $(".nav-button").removeClass('close');
  $(".nav-button").parent().removeClass('dark');
});

$(".close-button").on('click', function() {
  $(".darkOverlay").hide();
});

$(".contact-trigger").on('click', function(e) {
  e.preventDefault();
  $(".darkOverlay").show();
});


$('.anchor').on('click', function(e) {
  e.preventDefault();
  var target;
  target = $(this.hash);
  return $('html,body').animate({
    scrollTop: target.offset().top
  }, 500);
});

$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$.preloadImages("images/daisy.jpg", "images/elyssa-palasi-portrait.svg", "images/geometry.png", "images/symphony.jpg", "images/white-shape.svg", "images/yssa-monogram.svg", "images/projects/10k-challenge-2.jpg", "images/projects/10k-challenge-thumb.png", "images/projects/10k-challenge.jpg", "images/projects/brochure-inside.jpg", "images/projects/brochure-outside.jpg", "images/projects/eagle-star.jpg", "images/projects/expressappwizard.jpg", "images/projects/free-spirit-dining-thumb.png", "images/projects/freespiritdining.jpg", "images/projects/income-plans.jpg", "images/projects/lighthouse-brand-logo.png", "images/projects/moneywise.jpg", "images/projects/olo-acupuncture-thumb.png");

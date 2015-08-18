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

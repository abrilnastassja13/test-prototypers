$(window).load(function() {
	$(".btn-nav").on("click tap", function() {
    $(".nav-content").toggleClass("showNav hideNav").removeClass("hidden");

    $(this).toggleClass("animated");

  });
});


$(document).ready(function() {
  $(function() {
      $('#slides').superslides({
        hashchange: true
      });
    });
});

$(document).ready(function() {
 $(".foo, .bar").smoove({
    offset  : '15%',
    // moveX is overridden to -200px for ".bar" object
    moveX   : '100px',
    moveY   : '100px',
  });

  });
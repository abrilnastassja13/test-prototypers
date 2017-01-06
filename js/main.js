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
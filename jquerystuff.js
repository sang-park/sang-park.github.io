$(function(){
  var navOptions = $(".nav-options");
  $(window).on('scroll', function() {
      var yScrollPos = window.pageYOffset;
      var jumboHeight = 240;

      if(yScrollPos > jumboHeight) {
        navOptions.addClass("docked");
      } else if (navOptions.hasClass("docked")){
        navOptions.removeClass("docked");
      }
  });

  var navbarHeight = 52;


  $("#about-me-nav").click(function(event){
    $('html, body').animate({
      scrollTop: ($('#about-me').offset().top - navbarHeight)
    });
  });

  $("#projects-nav").click(function(event){
    $('html, body').animate({
      scrollTop: ($('#my-projects').offset().top - navbarHeight)
    });
  });
  $("#contact-nav").click(function(event){
      $('html, body').animate({
        scrollTop:  $(document).height()
      });
  });

});

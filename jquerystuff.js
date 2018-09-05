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



  $("#about-me-nav").click(function(event){
    $('html, body').animate({
      scrollTop: ($('#about-me').offset().top )
    });
  });
  $("#experience-nav").click(function(event){
    $('html, body').animate({
      scrollTop: ($('#experience').offset().top )
    });
  });


  $("#projects-nav").click(function(event){
    $('html, body').animate({
      scrollTop: ($('#my-projects').offset().top )
    });
  });
  $("#contact-nav").click(function(event){
      $('html, body').animate({
        scrollTop:  $(document).height()
      });
  });

});

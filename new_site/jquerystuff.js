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


});

(function($) {
  // init Event Handlers
  clickMenuToggle();

  // Toggle Menu in Masthead - mobile view
  function clickMenuToggle() {
    $('header#header i.nav-toggle').click(function(e) {
      $('nav').slideToggle(function() {
        if($(this).is(':visible')) {
          $(this).addClass('navbar-expand');
        } else {
          $(this).removeClass('navbar-expand');
        }
        // remove the style attribute, only want sliding animation
        $(this).removeAttr('style');
      });
    });
  }
})(jQuery);
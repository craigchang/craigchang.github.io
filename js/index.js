(function($) {
  // init Event Handlers
  clickMenuToggle();
  addH2AnchorLinks();

  // Add link icon to h2 headers; clicking navigates to current page + #slug
  function addH2AnchorLinks() {
    $('.page h2').each(function() {
      var $h2 = $(this);
      var text = $h2.text().trim();
      var slug = text.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      if (!slug) return;
      var path = window.location.pathname || '/';
      var href = path.replace(/\/?$/, '') + '#' + slug;
      $h2.attr('id', slug);
      if ($h2.find('.h2-anchor').length) return;
      var $anchor = $('<a href="' + href + '" class="h2-anchor" aria-label="Link to ' + text + '"><i class="fa fa-link"></i></a>');
      $h2.append($anchor);
    });
  }

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
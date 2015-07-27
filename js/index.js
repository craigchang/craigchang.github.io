(function($) {
	// init Event Handlers
	clickArticle();
	clickMenuToggle();

	// Blog page - make an entire blog entry clickable
	function clickArticle() {
		$('div.posts > article.post').click(function(e) {
			window.location = $(this).attr("data-url");
		});
	}

	// Toggle Menu in Masthead - mobile view
	function clickMenuToggle() {
		$('div.navbar-header > i.fa-bars').click(function(e) {
			//$('div.navbar-menu').toggleClass('navbar-expand', 500);
			$('div.navbar-menu').slideToggle(function() {
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
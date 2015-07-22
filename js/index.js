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
		$('div.menu-mobile > i.fa-bars').click(function(e) {
			$('div.menu-mobile nav').slideToggle();
		});
	}
})(jQuery);
(function($) {
	// init Event Handlers
	clickArticle();

	// Blog page - make an entire blog entry clickable
	function clickArticle() {
		$('div.posts > article.post').click(function(e) {
			window.location = $(this).attr("data-url");
		});
	}
})(jQuery);
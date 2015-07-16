(function($) {
	$('.post').click(function(e) {
		window.location = $(this).attr("data-url");
	});

})(jQuery);
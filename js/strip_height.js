$(document).ready(function() {
	var height = $(window).height();
	$('.strip').css('min-height', (height - 20) + 'px');
});
			
$(window).resize(function() {
	var height = $(window).height();
	$('.strip').css('min-height', (height - 20) + 'px');
});
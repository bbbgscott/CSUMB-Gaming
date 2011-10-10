$(document).ready(function() {
	var height = $(window).height();
	
	$('#bulbasaur')
		.sprite({fps: 1, no_of_frames: 3})
		.spStart();
		
	$('#bulbasaur').fps(6);
	
	function bg_animate()
	{
		$('#bulbasaur')
			.animate({top: height+'px'}, 10000)
			.animate({top: '0px'}, 0);
		
		setTimeout(bg_animate, 15000);
	}
	
	bg_animate();
});
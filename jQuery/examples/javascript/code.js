$(document).ready(function(){
	$('pre.eval').each(function() {
		eval($(this).html());
	});
	$('pre.code').highlight({source:1, zebra:1, indent:'space', list:'ol'});
});
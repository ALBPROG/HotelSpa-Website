$ = jQuery.noConflict();

function getHeight() {
	var height = $('section.promo, section.promo-video').height();
	$('#overlay').css({'height':height+'px'})
}


$(function() {
	window.setTimeout('getHeight()',100);


	$('#contact').submit(function(e) {
			e.preventDefault();

			var $form = $(e.target);


			$.post($form.attr('action'), $form.serialize(), function(result) {
				$('#correcto').fadeIn();
				console.log(result);
			}, 'json' );
		});
});

$(window).resize(function() {
	getHeight();
});

$(document).foundation();

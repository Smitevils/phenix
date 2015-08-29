$(document).ready(function() {
	var img_quantity = $('.main-slider-img.storage img').length;
	for (var i = 1; i < (img_quantity+1); i++) {
		$('.main-slider').append('<div id="slide-'+i+'" class="main-slider-slide">1</div>');
		var img_src = $('.main-slider-img.storage img:eq('+(i-1)+')').attr('src');
		$('#slide-'+i+'').css('backgroundImage', 'url('+img_src+')');
	};
	var timer = setInterval(setSlider, 3000);

	var slide_quantity = img_quantity;
	var slide_position = 1;

	function setSlider() {
		slide_position++;
		if (slide_position > slide_quantity) {
			slide_position = 1;
		};
		$('.main-slider-slide').css('opacity', '0');
		$('#slide-'+slide_position+'').css('opacity', '1');
	}
});
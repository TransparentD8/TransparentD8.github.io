$(window).scroll(function() {
	var wScroll = $(this).scrollTop()
	
	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll +'%)'
	});

	/*if(wScroll > $('.skills').offset().top - ($(window).height() / 1.2)){
		$('.skill').each(function(i){
			setTimeout(function(){
				$('.skills').eq(i).addClass('is-showing');
			}, 150 * (i+1))
		})
	}*/
});

$('.logo').click(function() {
         window.open('https://www.facebook.com/david.martirosyan.142') 
});

$(function() {
	smoothScrool(1000);
});

function smoothScrool (duration) {
	$('a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		})
	})
}

$('.to-top').on('click', function(){
	$('html, body').animate({
		scrollTop: ('1px')
	});
})


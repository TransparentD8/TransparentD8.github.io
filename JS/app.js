$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("#a").toggleClass('on');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
		windowWidth = $(window).width();
	if (windowWidth > 1000) {
		$('.logo').css({
			'transform' : 'translate(0px, '+ wScroll +'%)'
		});
	};

	if(wScroll > $('.skills').offset().top - ($(window).height() / 1.2)){
		$('.skills').children().each(function(i){
			setTimeout(function(){
				var styles = {
					opacity: 1
				};
				$('.skills').children().eq(i).css(styles);
			}, 150 * (i+1))
		})
	}
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


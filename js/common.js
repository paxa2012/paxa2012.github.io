$(function() {

	// Custom JS
	
		$('.box-item-body').hide();
	$('.box-item').on('click', function(){
		$('.box-item').removeClass('active');
		$(this).addClass('active');
		if($('.box-item').hasClass('active')){
			$('.box-item-body').slideUp();
			$(this).find('.box-item-body').slideDown();
		}
		else{
			$('.box-item-body').slideUp();
		}
	});

	
	$('.filters li').click(function () {
		$('.filters li').removeClass('active');
		$(this).addClass('active');

	});

	$('.carousel-indicators-my li').click(function () {
		$('.carousel-indicators-my li').removeClass('active');
		$(this).addClass('active');
	});
	$('.showw').css({'display': 'none'});
	$('.navbar-toggler').click(function () {
		$('.collapse').addClass('showw');
		//alert(123);
		$('.showw').slideToggle('slow', function(){
			if($('.showw').css('display') == 'none'){
				$('.collapse').removeClass('showw');
			}
		});

	});
	$(window).on("scroll", function () {
		$(document).scrollTop() > 840 ? $(".navbar").addClass("fixed-top") : $(".navbar").removeClass("fixed-top");
		$(document).scrollTop() > 840 ? $(".block-services").css({'margin-top': '217px'}) : $(".block-services").css({'margin-top': '81px'});
	});
	$(window).on("scroll", function () {
		$(document).scrollTop() > 1840 ? $(".button-up").css({'display': 'block'}) : $(".button-up").css({'display': 'none'})
	});

	$('.nav-link').on('click', function(e){
        e.preventDefault();
	});

	$('.button-up').on("click", function() {
        $("html, body").animate({
			scrollTop: 0
		}, 1000);
		
           
	});

	$('.gallery').mauGallery({
		columns: {
			xs: 1,
			sm: 2,
			md: 3,
			lg: 4,
			xl: 6
		},
		//lightBox: true,
		//lightboxId: 'myAwesomeLightbox',
		showTags: false,
		tagsPosition: 'top'
	});

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	  $(".link-nav").click(function () {
		$(".link-nav").removeClass('activ');
		$(this).addClass('activ')

		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top // .top+margin - ставьте минус, если хотите увеличить отступ
		}, {
				duration: 1000, // тут можно контролировать скорость
				easing: "swing"
			});

		return false;
	});

	

});

var vid = document.getElementById('my-video');
function playVid(){
	return vid.paused ? vid.play(
		$('.header-img-video .fas').removeClass('fa-play'),
		$('.header-img-video .fas').addClass('fa-pause'),
	) : vid.pause(
		$('.header-img-video .fas').removeClass('fa-pause'),
		$('.header-img-video .fas').addClass('fa-play'),
	);
}
document.addEventListener("DOMContentLoaded", function () {

	// Custom JS
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
		$(document).scrollTop() > 840 ? $(".navbar").addClass("fixed-top") : $(".navbar").removeClass("fixed-top")
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


	/*function getclass(ex){
		if(ex.matches){
			$('.subesribe-input .fas').css({'top':'25px'})
		}
		else{
			$('.subesribe-input .fas').css({'top':'28px'})
		}
	  }
	  var ex = window.matchMedia("(max-width: 340px)");
	  getclass(ex)
	  ex.addListener(getclass);*/

});



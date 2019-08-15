document.addEventListener("DOMContentLoaded", function() {

	// Custom JS
	$('.filters li').click(function() {			
		$('.filters li').removeClass('active');
		$(this).addClass('active');
	
	});

	$(window).on("scroll", function() {
        $(document).scrollTop() > 840 ? $(".navbar").addClass("fixed-top") : $(".navbar").removeClass("fixed-top")
    })
});

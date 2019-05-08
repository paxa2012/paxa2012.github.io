$(function() {

//------------- OwlCarousel2  ---------------
 var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,

    dots: true,
    responsive:{
        0:{
            items:1,
            
            dots: true,
        },
        600:{
            items:2,


        },
        1000:{
            items:3,


        }

    }
  });
  $('.c-next').on('click', function(){
    owl.trigger('next.owl.carousel');
  });
  $('.c-prev').on('click', function(){
    owl.trigger('prev.owl.carousel');
  });

//-------------  END OwlCarousel2  ---------------



//----------- hamburgers -------------------

$('.hamburger').on('click', function (){
  $('.navi').slideToggle( function(){

    if($('.navi').css('display') == 'block'){
      $('.hamburger').addClass('is-active');
    }
    else if($('.navi').css('display') == 'none'){
        $('.hamburger').removeClass('is-active');
    }

  });
});

function myFunction(x) {
	if (x.matches) {
		$('#navigation').html('<ul class="nav-top-mob"><li class="item"><a class="link" href="#">Услуги</a></li><li class="item"><a class="link" href="#">Партфолио</a></li><li class="item"><a class="link" href="#">Стоимость</a></li></ul>');
	} else {
		$('#navigation').html('<ul class="nav-top"><li class="item"><a class="link" href="#">Услуги</a></li><li class="item"><a class="link" href="#">Партфолио</a></li><li class="item"><a class="link" href="#">Стоимость</a></li></ul>');
		$('.nav').css({display : 'flex'});

	}
}
var x = window.matchMedia("(max-width: 1024px)");
myFunction(x);
x.addListener(myFunction);


function getclass(ex){
  if(ex.matches){
    $('.block-botton-text').removeClass('col-8');
    $('.block-botton-text').addClass('col');
  }
  else{
    $('.block-botton-text').removeClass('col');
    $('.block-botton-text').addClass('col-8');
  }
}
var ex = window.matchMedia("(max-width: 991px)");
getclass(ex)
ex.addListener(getclass);



function topButton (xe) {
  if(xe){
    
  }
}

var xe = window.matchMedia("(max-width: 768px)");
topButton(xe);
xe.addListener(topButton);

//----------- END hamburgers ---------------

	// Custom JS

});

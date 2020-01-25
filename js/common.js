$(function () {

	/// аккордион меню
	/*$('.box-item-body').hide();
	$('.box-item').on('click', function () {
		if ($('.box-item').hasClass('active')) {
			$('.box-item-body').slideUp();
			$(this).find('.box-item-body').slideDown();
		}
		else {
			$('.box-item-body').slideUp();
		}
	});*/


	//// выбирает активный слад в карусели
	$('.carousel-indicators-my li').click(function () {
		$('.carousel-indicators-my li').removeClass('active');
		$(this).addClass('active');
	});



	///мобильная навигация открывает и закрываетменю
	$('.showw').css({ 'display': 'none' });
	$('.navbar-toggler').click(function () {
		$('.collapse').addClass('showw');
		//alert(123);
		$('.showw').slideToggle('slow', function () {
			if ($('.showw').css('display') == 'none') {
				$('.collapse').removeClass('showw');
			}
		});
	});



	/// прилипани меню к верху экрана
	var mediaQuery = window.matchMedia('(max-width: 768px)');

	if (mediaQuery.matches) {
		$(window).on('scroll', function () {
			$(document).scrollTop() > 900 ? $('.navbar').addClass('fixed-top') : $('.navbar').removeClass('fixed-top');

		});
	} else {
		$(window).on('scroll', function () {
			$(document).scrollTop() > 700 ? $('.navbar').addClass('fixed-top') : $('.navbar').removeClass('fixed-top');

		});

	}
	var mediaQuerySm = window.matchMedia('(max-width: 560px)');

	if (mediaQuerySm.matches) {
		$(window).on('scroll', function () {
			$(document).scrollTop() > 700 ? $('.navbar').addClass('fixed-top') : $('.navbar').removeClass('fixed-top');

		});

	}
	var mediaQueryXs = window.matchMedia('(max-width: 400px)');

	if (mediaQueryXs.matches) {
		$(window).on('scroll', function () {
			$(document).scrollTop() > 950 ? $('.navbar').addClass('fixed-top') : $('.navbar').removeClass('fixed-top');

		});


	}
	var mediaQueryXss = window.matchMedia('(max-width: 320px)');

	if (mediaQueryXss.matches) {
		$(window).on('scroll', function () {
			$(document).scrollTop() > 950 ? $('.navbar').addClass('fixed-top') : $('.navbar').removeClass('fixed-top');

		});
	}



	/// отступ первой секции от меню
	$(window).on('scroll', function () {
		$(document).scrollTop() > 700 ? $('.block-services').css({ 'margin-top': '217px' }) : $('.block-services').css({ 'margin-top': '81px' });
	});



	//////// добовляет сласс active для секции work

	$('.filters li').click(function () {
		$('.filters li').removeClass('active');
		$(this).addClass('active');

	});

	$('.nav-link').on('click', function (e) {
		e.preventDefault();

	});

	$('.gallery').mauGallery({
		columns: {
			xs: 1,
			sm: 2,
			md: 3,
			lg: 4,
			xl: 6
		},
		showTags: false,
		tagsPosition: 'top'
	});




	//// плавающая кнопка поднимает до начало документа
	$(window).on('scroll', function () {
		$(document).scrollTop() > 1840 ? $('.button-up').css({ 'display': 'block' }) : $('.button-up').css({ 'display': 'none' })
	});

	$('.button-up').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});


		//////// counter для секции overlay
		var show = true;
		var countbox = ".counter";
		$(window).on("scroll load resize", function () {
			if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
			var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
			var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
			var w_height = $(window).height(); // Высота окна браузера
			var d_height = $(document).height(); // Высота всего документа
			var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
			if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
				$('.counter').css('opacity', '1');
				$('.counter').spincrement({
					thousandSeparator: "",
					duration: 1200
				});
				 
				show = false;
			}
		});


	///// плавная прокрутка при нажатии на пункты меню
	$('.link-nav').click(function () {
		$('.link-nav').removeClass('activ');
		$(this).addClass('activ')
		$('.showw').slideToggle('slow', function () {
			if ($('.showw').css('display') == 'none') {
				$('.collapse').removeClass('showw');
			}
		});

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top // .top+margin - ставьте минус, если хотите увеличить отступ
		}, {
			duration: 1000, // тут можно контролировать скорость
			easing: 'swing'
		});

		return false;
	});
});

/// плэй стоп видео в шапке сайта
var vid = document.getElementById('my-video');
function playVid() {
	return vid.paused ? vid.play(
		$('.header-img-video .far').removeClass('fa-play-circle'),
		$('.header-img-video .far').addClass('fa-pause-circle'),
	) : vid.pause(
		$('.header-img-video .far').removeClass('fa-pause-circle'),
		$('.header-img-video .far').addClass('fa-play-circle'),
	);
}


var form_sub = document.querySelector('.btn-sub')
form_sub.addEventListener('click' , function(e){
	e.preventDefault()
	var subscribe = document.querySelector('form')
	subscribe.classList.add('overlay__form')
})
var form_sub_contact = document.querySelector('.bt')
form_sub_contact.addEventListener('click' , function(e){
	e.preventDefault()
	var subscribe_contact = document.querySelector('.form__contact')
	subscribe_contact.classList.add('overlay__form--contact')
	subscribe_contact.reset()
	setInterval(() => {
		subscribe_contact.classList.remove('overlay__form--contact')
	}, 10000);
	
})



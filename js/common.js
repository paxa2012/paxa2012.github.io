$(function() {


	////  добваить ФИО при пронировании
	let bt = document.querySelector('.add-btn');
	let input_text = document.querySelector('#text-modal');
	bt.addEventListener('click' , function(){

  if(input_text.value == ''){
    
  }
  else{
    let text = input_text.value;
	let element = document.querySelector('.addNewPeople');
	let el = document.createElement('li');
	let el_count = $(".addNewPeople li").length;
	el.innerHTML = text;
      element.appendChild(el);
	  input_text.value = '';
	  if(el_count == 3 ){
		$('.add-btn').parent().remove();
		/*let element_r = document.querySelector('.upravlenie');
		let remove_li = document.createElement('p');
		remove_li.innerHTML = '<p class="add-btn-r">-Удалить последний элемент</p>';
		element_r.appendChild(remove_li);
		add-btn-r.addEventListener('click', function(){

		})
*/
		}
		
	

      
      }
  });
  let bt_2= document.querySelector('.add-btn-2');
  let input_text_2 = document.querySelector('#text-modal-2');
  bt_2.addEventListener('click' , function(){

if(input_text_2.value == ''){
  
}
else{
  let text_2 = input_text_2.value;
  let element_2 = document.querySelector('.addNewPeople-2');
  let el_2 = document.createElement('li');
  let el_count_2 = $(".addNewPeople-2 li").length;
	el_2.innerHTML = text_2;
	element_2.appendChild(el_2);
	input_text_2.value = '';
	if(el_count_2 == 3 ){
	  $('.add-btn-2').parent().remove();
  }
	
	}
});

let bt_3 = document.querySelector('.add-btn-3');
	let input_text_3 = document.querySelector('#text-modal-3');
	bt_3.addEventListener('click' , function(){

  if(input_text_3.value == ''){
   
  }
  else{
    let text_3 = input_text_3.value;
	let element_3 = document.querySelector('.addNewPeople-3');
	let el_3 = document.createElement('li');
	let el_count_3 = $(".addNewPeople-3 li").length;
      el_3.innerHTML = text_3;
      element_3.appendChild(el_3);
	  input_text_3.value = '';
	  if(el_count_3 == 3 ){
		$('.add-btn-3').parent().remove();
	}
      
      }
  });


  let cur = 4400;
  let cur2 = 4900;
  let cur3 = 5500;
  const chkBox = document.getElementById('Check1');
  const chkBox1 = document.getElementById('Check2');
  const chkBox3 = document.getElementById('Check4');
  const chkBox4 = document.getElementById('Check5');
  const chkBox5= document.getElementById('Check7');
  const chkBox6 = document.getElementById('Check8');
  

	chkBox.addEventListener('click', function(){
		if (chkBox.checked)
		{
		
		cur = cur + 500;
		document.querySelector('.curent').textContent = cur;
		
		}
		else{
			cur = cur - 500;
			document.querySelector('.curent').textContent = cur;
		}
	});

	chkBox1.addEventListener('click', function(){
		if (chkBox1.checked)
		{
			cur = cur + 450;
			document.querySelector('.curent').textContent = cur;
		
		}
		else{
			cur = cur - 450;
			document.querySelector('.curent').textContent = cur;
		}
	});

	chkBox3.addEventListener('click', function(){
		if (chkBox3.checked)
		{
			
		cur2 = cur2 + 500;
		document.querySelector('.curent-2').textContent = cur2;
		
		}
		else{
			cur2 = cur2 - 500;
			document.querySelector('.curent-2').textContent = cur2;
		}
	});

	chkBox4.addEventListener('click', function(){
		if (chkBox4.checked)
		{
			cur2 = cur2 + 450;
			document.querySelector('.curent-2').textContent = cur2;
		
		}
		else{
			cur2 = cur2 - 450;
			document.querySelector('.curent-2').textContent = cur2;
		}
	});

	chkBox5.addEventListener('click', function(){
		if (chkBox5.checked)
		{
		
		cur3 = cur3 + 500;
		document.querySelector('.curent-3').textContent = cur3;
		
		}
		else{
			cur3 = cur3 - 500;
			document.querySelector('.curent-3').textContent = cur3;
		}
	});

	chkBox6.addEventListener('click', function(){
		if (chkBox6.checked)
		{
			
			cur3 = cur3 + 450;
			document.querySelector('.curent-3').textContent = cur3;
		
		}
		else{
			cur3 = cur3 - 450;
			document.querySelector('.curent-3').textContent = cur3;
		}
	});

	
 
	
	$('.slick').slick({
		asNavFor: '.slick-2',
		arrows: false,
		//fade: true,
		//infinite: true,
		slidesToShow: 1,
		  slidesToScroll: 1,
		  responsive: [
			{
			  breakpoint: 360,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ],
	});

	$('.slick-2').slick({
		asNavFor: '.slick',
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		//centerMode: true,
		centerPadding: '10px',
		focusOnSelect: true,
		arrows: false,
		responsive: [
			{
			  breakpoint: 360,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ],
	});


	$('.hamburger').on('click', function(){
		$('#navi').css('display', 'block');
		$('.hamburger').css('display', 'none');
	});
	$('.cross').on('click', function(){
		$('#navi').css('display', 'none');
		$('.hamburger').css('display', 'block');
	})

	// Custom JS


	$('#hamburger1').on('click', function(){
		$('#navigation').css('display', 'block');
	});
});

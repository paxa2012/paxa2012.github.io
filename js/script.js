$(function () {

$('.sidenav-trigger').on('click', function(){
     $('.toolbar').css({
        'transform': 'translateX(0)'
     })
     /*$('.content').css({
         'position': 'absolute',
         'top': '0',
         'left': '0',
         'right': '0',
         'bottom': '0',
         'opacity': '0.92',
         'background-color': '#aaa',
         
     })*/
})
$('.close').on('click', function(){
    $('.toolbar').css({
        'transform': 'translateX(-350px)'
     })
})

$('.readmore_start').on('click', function(){
    $('.readmore').css({
        'display': 'block'
    })
    $('.readmore_start').css({
        'display': 'none'
    })
    $('.readmore_end').css({
        'display': 'inline-block'
    })
})
$('.readmore_end').on('click', function(){
    $('.readmore').css({
        'display': 'none'
    })
    $('.readmore_start').css({
        'display': 'inline-block'
    })
    $('.readmore_end').css({
        'display': 'none'
    })
})
 
    //$('.sidenav').sidenav();

});
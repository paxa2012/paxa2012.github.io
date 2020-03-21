$(function () {

$('.sidenav-trigger').on('click', function(){
     $('.toolbar').css({
        'transform': 'translateX(0)'
     })
})
$('.close').on('click', function(){
    $('.toolbar').css({
        'transform': 'translateX(-350px)'
     })
})

 
    //$('.sidenav').sidenav();

});
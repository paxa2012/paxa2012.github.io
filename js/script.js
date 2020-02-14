$(function () {


    //Меню открыть/закрыть
    $('.menu').on('click', function () {
        $('.toolbar').css('margin-left', '0')
        $('.menu').css('display', 'none')
        $('.close').css('display', 'block')
    })
    $('.close').on('click', function () {
        $('.toolbar').css('margin-left', '-13%')
        $('.close').css('display', 'none')
        $('.menu').css('display', 'block')
    })

    

});
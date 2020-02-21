// прокрутка

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-Number($('nav').height());
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $("#menu1").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-Number($('nav').height());
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
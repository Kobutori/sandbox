//script
function fadeAnime(){
    $('.fade').each(function(){
        var elemPos = $(this).offset().top-50;
        console.log(elemPos);
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('fade');
        }else{
            $(this).removeClass('fade');
        }
    })
}

$(window).scroll(function(){
    fadeAnime();
});
$(window).on('load',function(){
    fadeAnime();
})
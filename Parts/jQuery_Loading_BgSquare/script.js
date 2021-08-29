$(window).on('load',function(){
  // ローディングエリア(splashエリア)を1.5秒でフェードアウトする記述
  $('#splash').delay(1500).fadeOut('slow',function(){
    $('body').addClass('appear');
    var h = $(window).height();
    $('.splashbg').css({
      "border-width":h,
      "animation-name":"backBoxAnime"
    });
  });
  $('#splash-logo').delay(1200).fadeOut('slow');
});

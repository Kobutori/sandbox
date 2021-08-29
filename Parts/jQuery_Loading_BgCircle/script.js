$(window).on('load',function(){
  //ロゴを1.2秒でフェードアウトする記述
  // ローディングエリア(splashエリア)を1.5秒でフェードアウトする記述
  $('#splash').delay(1500).fadeOut('slow',function(){
    $('body').addClass('appear');
  });
  $('.splashbg').on('animationend', function(){
    //背景が伸びたあとに動かしたいjavascriptはここで記載
  });
});

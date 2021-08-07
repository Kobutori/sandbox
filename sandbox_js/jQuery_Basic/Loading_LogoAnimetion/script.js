// Logoの表示
$(window).on('load' function(){
  //ローディング画面を1.5秒(1500ms)待機してからフェードアウト
  $("#splash").delay(1500).fadeOut('slow');
  //ロゴを1.2秒待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');
})
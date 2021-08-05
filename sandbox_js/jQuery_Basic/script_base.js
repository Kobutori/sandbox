// jQuery基本文法

// ■クラス名があるかどうかの判定・追加・削除
// hasClass ... classの有無を調べる
if($('li').hasClass('close')){ //liにクラス名closeがあれば
    $('li').removeClass('close'); //liのクラス名を除去する
}

// addClass ... 指定した要素にclassを追加する
$('.openbtn').click(function(){ //openbtnというクラス名がついた要素をクリックすると
    $(this).addClass('active'); //openbtnがついている要素にactiveというクラス名を追加
});

// removeClass ... 指定した要素からクラスを削除
$('.navigation').click(function(){ //navigationというクラス名がついた要素をクリックすると
    $('.bgnavi').removeClass('active'); //bgnaviクラスがついている要素のactiveクラスを削除
});

// toggleClass　... 指定したクラスが要素になければ追加し、あれば削除する
$('.openbtn').click(function(){
    $(this).toggleClass
})

// =============================================================
// ■ 要素の取得・見つける
// parent ... 指定した要素の親要素を取得する
$('.accordion').parent().addClass('active'); //.accordionの親要素を取得してactiveクラスを追加する


// children　...　指定した要素の子要素を取得する
$('.accordion').children().addClass('active'); //acordionの親要素を取得してactiveクラスを追加

//find ... 指定した子要素から条件に合致するものを見つける
$('.forcus-btn').click(function(){ // forcus-btnをクリックすると
    $('table').find('.forcus').css('backgroundColor','#ccc');//tableの中にあるforcusクラスがついている要素の背景を灰色にする
})

// fadeIn ... 時間をかけて表示する
$('.article-list').fadeIn(900); //.article-listが0.9秒かけてフェードイン

// fedeOut ... 時間をかけて非表示にする
$('#splash-logo').fedeOut(1200); //#splash-logoを1.2秒でフェードアウト

// show ... 表示する
$('btn').click(function(){
    $('article-block').show(); //.btnをクリックしたら.article-blockを表示
})

// hide ... 非表示
$('title').click(function(){
    $('article-block').hide();
})

// slideDown ... スライドしながら表示する
$('.title').on('click',function(){
    $('.box').slideDown(500); // .boxを0.5秒かけてスライドしながら表示
})

// slideUp ... スライドしながら非表示にする
$('.title').on('click',function(){
    $('.box').slideUp(500); // .boxを0.5秒かけてスライドしながら非表示
})

// slideToggle ... スライドしながら非表示にする
$('.title').on('click',function(){
    $('.box').slideToggle(500); //.boxが0.5秒かけてスライド表示、非表示
})


// animate .... 値を指定して、Animationを実行する。
$('#page-top').click(function(){
    $('body,html').animete({ //bodyとHTMLの
        scrollTop: 0　//スクロール位置を0にするAnimationを実行
    },500); //ページトップスクロールの速さは0.5秒
    return false; //リンク自体は無効
})

//css ... jQueryを使いCSSを操作する
$('.has-child').children('ul').css("display","block"); //.has-childのついた子要素のulのdisplayをblockにする。

// =============================================================
// ■ 値を設定・追加する
// attr .... 要素に値を設定する、または設定されている値を取得する
$('#page-link a').click(function(){
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefからリンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top;　// idの上部の距離を取得
    $('body,html').animate({ //取得した位置に0.5秒でスクロール
        scrollTop: pos
    },500);
    return false; //リンク自体は無効化
})

// append .... 要素に値を追加する
$('#box').append('<ul class="pagenation>'); //#boxの中身の最後に<ul class="pagination">を追加

// appendTo ... 要素の中身を他の要素に追加する
$('.navigation').appendTo('.wrapper')//navigationの内容すべてをwrapperの中身の最後に追加


// =============================================================
// ■ 値を取得する
//$(window).width(); ... ウィンドウの横幅を取得する
var winw = $(window).width(); //ウィンドウの横幅を取得して、winwという変数に格納する

// $(window).height(); ... ウィンドウの縦幅を取得する
var winh = $(window).height(); //ウィンドウの縦幅を取得してwinhという変数に格納する

//outerHeight() ... border、paddingを含む要素の外部の高さを取得
var headerH = $('#header').outerHeight(true);//headerの高さを取得してheaderHという変数に格納する

// scrollTop ....　スクロール位置を取得・設定
var scroll = $(window).scrollTop(); //スクロール地を取得してscrollという変数に格納する

// offset() ... 画面上に配置したHTML要素の表示位置を座標（上からの距離と左からの距離）で取得する
var offsetTop = $('#area-2').offset().top;// #area-2のtopの位置を取得し、offsetTopという変数に格納する
var offsetLeft = $('#area-2').offset().left;// #area-2のleftの位置を取得し、offsetLeftという変数に格納する

// Math.round(数値, 桁数)　... 小数点以下を四捨五入
var contentsTop = Math.round($('#area-3').offset().top);	//#area-3までの高さを四捨五入した値で取得してcontentsTopという変数に格納する

// text ... HTML要素内にあるテキスト情報を取得・追加・変更する
var counter = $('.count-up').text(); // .count-upのテキスト情報をcounterという変数に格納

// prop ... HTML要素内にあるid、class、nameといった属性や、フォームなどで使われるchecked、selectedなどのプロパティを取得
$("input#join-btn").prop("disabled", true);//#join-btnがついたinputタグの操作を無効化する

// split　... 文字列の分割
var className = $('.sort-btn li').attr('class');//.sort-btn liのクラス名を取得しclassnameという変数に格納する
className = className.split(' '); // クラス名を分割して配列にする
$('.'+classname[0]).addClass('active'); // 上記で取得した配列の0番目にactiveクラスを付与



// =============================================================
// ■独自の名前をつけて定義する
//var ... 変数を定義する
var headerH = $('#header').outerHeight(true); //ヘッダーの高さを取得
var scroll = $(window).scrollTop(); //スクロール値を取得
if (scroll >= headerH){//ヘッダーの高さ以上までスクロールしたら
    $('.openbtn').addClass('fadeDown');//.openbtnにfadeDownというクラス名を付与して
  }else{//それ以外は
    $('.openbtn').removeClass('fadeDown');//fadeDownというクラス名を除く
  }

// function 独自の関数名() {　} ... 動きを関数でまとめて定義する
//===== 1. 動きをfadeAnimeという名前の関数で定義する
function fadeAnime(){

	$('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
		}else{
		$(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
		}
		});
}

//===== 2. 定義した名前をページが読み込まれた後・スクロールした後それぞれのきっかけに指定
// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動く場合の記述

// ページが読み込まれたらすぐに動く場合の記述
$(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまでページが読み込まれたらすぐに動く場合の記述



// =============================================================
// ■処理の実行・中止

// each ... 繰り返し処理を実行する
var headerH = $('#header').outerHeight(true); //#header　の高さを取得
$('scroll-point').each(function(i){ //.scroll-pointクラスがついたエリアからトップまでの距離を計算して設定
    elemTop[i] = Math.round(parseInt($(this).offset().top - headerH));//追従するheader分の高さを引き小数点を四捨五入
})

//delay .... 遅延して実行する
$('#splash-logo').delay(1500).fedeOut('slow');　//#splash-logoを1.5秒遅延させてフェードアウト

// return false ... 処理を止める
$('#page-top').click(function () {// #page-topをクリックしたら
    $('body,html').animate({//bodyとhtmlの
        scrollTop: 0//スクロール位置を0にするアニメーションを実行
    }, 500);//ページトップスクロールの速さは0.5秒。
    return false;//リンク自体は無効化
});


// =============================================================
// ■条件分岐

// if文
if (scroll >= 100){//上から100pxスクロールしたら
    $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
    $('#page-top').addClass('UpMove');//#page-topにUpMoveというクラス名を付与
}else{
    if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
        $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
        $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
}
}

// ウィンドウの横幅を取得し、画面サイズに合わせて処理を条件分岐
    function mediaQueriesWin(){ 
        var width = $(window).width();
        if(width <= 768) {
            $(".navi").addClass('active');//横幅が768px以下の場合 naviというクラスに activeを追加	
        }else{
        $(".navi").removeClass('active');//横幅が768pxより大きい場合 naviというクラスについている activeを削除	
        } 
    }
　// 画面がリサイズされたら動かす
    $(window).resize(function() {
        mediaQueriesWin();/*関数を呼ぶ*/
    });
　// 画面が読み込まれたらすぐに動かす
    $(window).on('load',function(){
        mediaQueriesWin();/*関数を呼ぶ*/
    });
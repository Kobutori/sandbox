"use strict"; //落とし穴になりやすい機能の制限

//メッセージを表示するイベントハンドラ
function doShowMessage(){
    let name = $('#name').val();
    name = name.trim();
    if(! name){
        alert("Enter your name.");
    }else{
        let msg = "Hello." + name + "!";
        $('#message').text(msg);
    }
}
//名前欄とメッセージ欄をクリアするイベントハンドラ
function doClear(){
    $('#name').val("");
    $('#message').text("");
}

//ボタンにイベントハンドラを登録する
$(function(){
    $('#show-btn').on('click', doShowMessage);
    $('#clear-btn').on('click', doClear);
});



$(function(){//HTMLの読み込みが完了したら下記実行
    //「表示」ボタンがクリックされたときの処理を登録
    $('#show-btn').on('click', function(){

    });

    //「クリア」ボタンがlkウリックされたときの処理を登録
    $('#clear-btn').on('click', function(){

    });
});
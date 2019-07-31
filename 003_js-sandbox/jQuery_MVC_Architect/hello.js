"use strict"; //落とし穴になりやすい機能の制限

//=========コア機能=========

//メッセージを作成する
function buildMessage(name){
    return "Hello," + name + "!";
}

//=========表示に関する機能=========

//メッセージを表示する
function showMessage(msg){
    $('#message').text(msg);
}

//アラートの表示
function showAlert(msg){
    alert(msg);
}

//名前欄とメッセージ欄をクリア
function clear(){
    $('#name').val("");
    $('#message').text("");
}

//=========ユーティリティ関数=========
//文字列の前後の空白を取り除く
function trimString(str){
    return str.trim();
}

//=========イベントハンドラ=========
//「表示」ボタンがクリックされたときのイベントハンドラ
function doShowMessage(){
    let name = $('#name').val();
    name = trimString(name);
    if(! name){
        showAlert("Enter your name.");
    }else{
        let msg = buildMessage(name);
        showMessage(msg);
    }
}

//「クリア」ボタンをがクリックされたときのイベントハンドラ
function doClear(){
    clear();
}

//ボタンにイベントハンドラを登録する
function registerHandLers(){
    $('#show-btn').on('click', doShowMessage);
    $('#clear-btn').on('click', doClear);
}

$(function(){
    registerHandLers();
});



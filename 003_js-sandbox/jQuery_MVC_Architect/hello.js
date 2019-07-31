"use strict"; //落とし穴になりやすい機能の制限

$(function(){//HTMLの読み込みが完了したら下記実行
    //「表示」ボタンがクリックされたときの処理を登録
    $('#show-btn').on('click', function(){
        let name = $('#name').val();
        name = name.trim();
        if(! name){
            alert("Enter your name.");
        }else{
            let msg = "Hello." + name + "!";
            $('#message').text(msg);
        }
    });

    //「クリア」ボタンがlkウリックされたときの処理を登録
    $('#clear-btn').on('click', function(){
        $('#name').val("");
        $('#message').text("");
    });
});
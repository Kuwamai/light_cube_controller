var can = document.getElementById("canvas");
var ctx = can.getContext("2d");

//canvasサイズの変更
(function(){
    if (window.innerWidth > 1024) {
        can.width = 600;
        can.height = 600;
    } else {
        can.width = window.innerWidth;
        can.height = window.innerWidth;
    }
}());

//円の半径
var radius = can.width / (27 * 2 - 1) / 2;
//円のピッチ
var pitch = radius * 4;
//アニメーション用タイマー
var timer = null;

function stopTimer(){
    clearInterval(timer);
}

up();

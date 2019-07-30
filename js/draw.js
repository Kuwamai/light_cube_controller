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
//アニメーションカウンター
var count = 0;

var timer = setInterval(function(){
    ctx.fillStyle="rgb(255, 255, 255)"//消去時の色
    ctx.clearRect(0,0,can.width,can.height);//消去

    for(var cx = 0; cx < 9; cx++){
        for(var cy = 0; cy < 9; cy++){
            for(var k = 0; k < 3; k++){
                for(var l = 0; l < 3; l++){
                    var cz = 3*k + l;
                    //円の描画
                    ctx.beginPath();
                    ctx.arc(radius + l*pitch + 3*cy*pitch, radius + k*pitch + 3*cx*pitch, radius, 0, Math.PI*2);
                    ctx.closePath();
                    //塗りつぶし
                    var color = Math.round((Math.sin((cz+count)/4*Math.PI)+1)/2*255);
                    ctx.fillStyle=`rgb(${color},${color},${color})`
                    ctx.fill();
                }
            }
        }
    }
    count++;
    if(count > 7) count = 0;
},100);

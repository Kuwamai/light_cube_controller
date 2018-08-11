var can = document.getElementById("canvas");
var ctx = can.getContext("2d");

var count = 0;//アニメーションカウンター
var timer = setInterval(function(){
  ctx.fillStyle="rgb(255, 255, 255)"//消去時の色
  ctx.clearRect(0,0,300,300);//消去
  ctx.fillStyle="rgb(" + 0 + "," + 0 + "," + count + ")"//塗りつぶし色
  ctx.fillRect(30,30,30,30);
  count++;
  if(count>200){
    clearInterval(timer);
  }
},100);

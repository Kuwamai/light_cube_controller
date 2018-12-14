var can = document.getElementById("canvas");
var ctx = can.getContext("2d");

//canvasサイズの変更
can.width = window.innerWidth;
can.height = window.innerHeight;

var count = 0;//アニメーションカウンター
var timer = setInterval(function(){
  ctx.fillStyle="rgb(255, 255, 255)"//消去時の色
  ctx.clearRect(0,0,300,300);//消去
  ctx.fillStyle="rgb(" + 0 + "," + 0 + "," + count + ")"//塗りつぶし色
  //ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  ctx.arc(30, 30, 30, 0, Math.PI*2);
  ctx.fill();
  count++;
  if(count>249){
    clearInterval(timer);
  }
},20);

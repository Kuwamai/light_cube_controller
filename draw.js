var can = document.getElementById("canvas");
var ctx = can.getContext("2d");

//canvasサイズの変更
can.width = window.innerWidth;
can.height = window.innerHeight;

//アニメーションカウンター
var count = 0;
//円の半径
var radius = window.innerWidth / (27 * 2 - 1) / 2;
//円のピッチ
var pitch = radius * 4;

var timer = setInterval(function(){
	ctx.fillStyle="rgb(255, 255, 255)"//消去時の色
	ctx.clearRect(0,0,window.innerWidth,window.innerHeight);//消去
	ctx.fillStyle="rgb("+count*5+","+count*5+","+count*5+")"//塗りつぶし色
	
	for(var i = 0; i < 9; i++){
		for(var j = 0; j < 9; j++){
			for(var k = 0; k < 3; k++){
				for(var l = 0; l < 3; l++){
					//円の描画
					ctx.beginPath();
					ctx.arc(radius + l*pitch + 3*j*pitch, radius + k*pitch + 3*i*pitch, radius, 0, Math.PI*2);
					ctx.closePath();
					//塗りつぶし
					ctx.fill();
				}
			}
		}
	}

	count++;
	if(count>50){
		clearInterval(timer);
	}
},250);

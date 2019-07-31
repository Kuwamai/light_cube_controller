function wave(){
    stopTimer();
    //アニメーションカウンター
    var count = 0;

    timer = setInterval(function(){
        ctx.fillStyle="rgb(255, 255, 255)"//消去時の色
        ctx.clearRect(0,0,can.width,can.height);//消去

        //cx, cy, czは円の中心位置
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
                        var color = (Math.sin((cy+count)/8*Math.PI)+1)/2;
                        if(color < cz/8) color = 0;
                        color = Math.round(color*255);
                        ctx.fillStyle=`rgb(${color},${color},${color})`
                        ctx.fill();
                    }
                }
            }
        }
        count++;
        if(count > 16-1) count = 0;
    },100);
}

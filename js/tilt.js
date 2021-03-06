function tilt(){
    request_permission();
    stopTimer();
    //アニメーションカウンター
    var count = 0;

    var alpha = 0;
    var beta  = 0;
    var gamma = 0;

    window.addEventListener("deviceorientation", function(pose){
        alpha = pose.alpha;
        beta  = pose.beta;
        gamma = pose.gamma;
    }, false);

    timer = setInterval(function(){
        ctx.fillStyle="rgb(255, 255, 255)"//消去時の色
        ctx.clearRect(0,0,can.width,can.height);//消去

        //cx, cy, czは円の中心位置
        for(var cx = 0; cx < 9; cx++){
            for(var cy = 0; cy < 9; cy++){
                for(var k = 0; k < 3; k++){
                    for(var l = 0; l < 3; l++){
                        var cz = 3*(2-k) + (2-l);
                        //円の描画
                        ctx.beginPath();
                        ctx.arc(radius + l*pitch + 3*cy*pitch, radius + k*pitch + 3*cx*pitch, radius, 0, Math.PI*2);
                        ctx.closePath();
                        //塗りつぶし
                        cy*Math.tan(gamma)
                        var color = ((cy-4)*Math.tan(gamma*(Math.PI/180))+(cx-4)*Math.tan(beta*(Math.PI/180)))/8+0.5;
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

var x = 50;
var y = 0;
var r = 20;
var gravity = 3;    // 加速度
var damp = 0.5;     // 反発係数
var spped_x = 0;
var spped_y = 0;    //　y方向の速度
/*var centerX = 200;
var centerY = 200;*/


function setup() {
    createCanvas(480, 240);
    background(0);
    noStroke();
    noLoop();
    /*fill(100);//
    ellipse(centerX + 200, centerY, 80, 80);
    ellipse(centerX, centerY, 80, 80);

    fill(100);
    circke(centerX + 100, centeruY + 10, 200);
    rect(centerX, centerY, 200, 170);*/
}

function draw() {
    background(0);
    ellipse(x, y, r, r);
    spped_y += gravity;
    /*centerZ += gravity;
    centerY += centerZ;*/
    y += spped_y;
    //if (x > width || x < 0) velX = -velX;
    if (y > height) {
        spped_y *= -1;
        spped_y *= damp;
        y = height;

    }
    /*if (centerY > height) {
        centerZ *= -1;
        centerZ *= damp;
        centerY = height;
    }*/
}
function OnButtonClick3() {
    loop(); // draw関数のループを再開させる
}

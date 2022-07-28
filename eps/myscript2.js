let num = 0;
let balls = [];
let bounds = 0.6;
let grav = 1;
let good;
let num_img = 0;
let goods = [];

function setup() {
    let canvas = createCanvas(windowWidth, 3 * windowHeight / 4);
    canvas.parent('canvas');
    colorMode(HSB, 360, 100, 100, 100);
}

function preload() {
    good = loadImage('good.png');
}

function onButtonClick3() {
    balls[num] = new Ball(color('#00ff00'));
    num += 1
    console.log(num)
}

function onButtonClick4() {
    balls[num] = new Ball(color('#F067A6'));
    num += 1
    console.log(num)
}

function onButtonClick5() {
    nekos[num_img] = new pic(good);
    num_img += 1
    console.log(num_img)
}

function draw() {
    background(0, 0, 20, 50);
    //繰り返し処理によって配列の各要素にインスタンスの更新と表示処理を実行する
    for (let i = 0; i < num; i++) {
        balls[i].update();
        balls[i].display();
    }
    for (let j = 0; j < num_img; j++) {
        goods[j].update();
        goods[j].display();


    }

}

//クラスの記述
class Ball {
    constructor(c) {
        //new Ball()で呼び出せる初期化処理
        this.x = random(0, 600)
        this.y = 0
        this.sx = random(-5, 5);
        this.sy = random(-5, 5);
        this.c = c;
        this.d = random(25, 50);
        this.count = 0;
    }
    //スピードや跳ね返りなどの数値計算
    update() {
        //xyにスピードを加算
        this.x = this.x + this.sx;
        this.y = this.y + this.sy;

        if (this.x + this.d / 2 > width) { //ｘが画面幅よりも大きいとき
            this.sx = this.sx * -1 * bounds;
        }
        if (this.x - this.d / 2 < 0) { //ｘが画面幅よりも大きいとき
            this.sx = this.sx * -1 * bounds;
        }
        if (this.y + this.d / 2 > height) { //yが画面幅よりも大きいとき
            this.sy = this.sy * -1 * bounds;
            this.y = height - 30;
            this.count++;
        }

        /*if (this.y - this.d / 2 < 0) { //yが画面幅よりも大きいとき
          this.sy = this.sy * -1 * bounds;
        }*/
        this.sy += grav;

        if (this.count > 20) {
            this.sx = 0;
            this.sy = 0;
        }
    }
    //図形描画  
    display() {
        fill(this.c);
        noStroke();
        ellipse(this.x, this.y, this.d, this.d);
    }
}

//クラスの記述
class pic {
    constructor(img) {
        //new Ball()で呼び出せる初期化処理
        this.img = img
        this.x = random(0, 600)
        this.y = 0
        this.sx = random(-5, 5);
        this.sy = random(-5, 5);
        this.sizex = 100;
        this.sizey = 100;
        this.d = 50;
    }
    //スピードや跳ね返りなどの数値計算
    update() {
        //xyにスピードを加算
        this.x = this.x + this.sx;
        this.y = this.y + this.sy;

        if (this.x + this.d / 2 > width) { //ｘが画面幅よりも大きいとき
            this.sx = this.sx * -1;
        }
        if (this.x - this.d / 2 < 0) { //ｘが画面幅よりも大きいとき
            this.sx = this.sx * -1;
        }
        if (this.y + this.d / 2 > height) { //yが画面幅よりも大きいとき
            this.sy = this.sy * -1 * bounds;
        }

        /*if (this.y - this.d / 2 < 0) { //yが画面幅よりも大きいとき
          this.sy = this.sy * -1 * bounds;
        }*/
        this.sy += grav
    }
    //図形描画  
    display() {
        image(this.img, this.x, this.y, this.sizex, this.sizey);
    }
}
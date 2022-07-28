/*
033_クラスを使ったアニメーション
*/

//配列の個数
let num = 0;
let balls = [];
let bounds = 0.95
let grav = 1;

let neko;
let num_img = 0;
let nekos = [];

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);

  //繰り返し処理によってクラスのインスタンスを作成し配列ballsに格納
  /*for (let i = 0; i < num; i++) {
    balls[i] = new Ball();
  }*/
}

function preload(){
    neko = loadImage('neko.png');
}

function onButtonClick1(){
    balls[num] = new Ball(color('#00ff00'));
    num += 1
    console.log(num)
}

function onButtonClick2(){
    balls[num] = new Ball(color('#F067A6'));
    num += 1
    console.log(num)
}

function onButtonClick3(){
  nekos[num_img] = new pic(neko);
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
  //繰り返し処理によって配列の各要素にインスタンスの更新と表示処理を実行する
    image(neko,300,300,100,100)
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
    this.sizex = 100;
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
  ima() {
    image(this.img, this.x, this.y, this.sizex, this.sizey);
  }
}
//クラスをつかったコードが書けると構造的にプログラムが作成できる．また再利用や修正が容易なので，是非挑戦してみてください．
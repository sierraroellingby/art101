
let hongkong;

let hk1;
let hk1alert=false;
let hk2;
let hk2alert=false;
let hk3;
let hk3alert=false;
let hk4;
let hk4alert=false;


function preload(){

   hongkong4 = loadImage('hongkongcrop4.png')
   hkflower = loadImage('hongkongtransparentflower.png')
  // hongkong1 = loadImage('hongkongcrop1.png')
  // hongkong2 = loadImage('hongkongcrop2.png')
  // hongkong3 = loadImage('hongkongcrop3.png')
  // prochina1 = loadImage('prochina1.png')
  // prochina2 = loadImage('prochina2.png')
  // prochina3 = loadImage('prochina3.png')
  // prochina11 = loadImage('prochina11.png')
}
const particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
hk1=select("#hk1");
hk1.mouseOver(alert1);
hk2=select("#hk2");
hk2.mouseOver(alert2);
hk3=select("#hk3");
hk3.mouseOver(alert3);
hk4=select("#hk4");
hk4.mouseOver(alert4);
}

function draw() {
  clear();
//  background(10);
  // imageMode(CENTER);
  // image(hongkong4, 300, 100);
  // image(hongkong1, 30, 400);
  // image(hongkong2, 100, 500);
  // image(hongkong3, 600, 400);
  // image(prochina1, 950, 200);
  // image(prochina2, 750, 700);
  // image(prochina11, 950, 250);
  // image(prochina3, 1300, 500);
  for (let i = 0; i < 5; i++) {
    // change last two parameters to change speed
    let p = new Particle(mouseX, mouseY, map(mouseX - pmouseX, 0, 10, -.5, .5), map(mouseY - pmouseY, 0, 10, .5, 1));
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
//color changing particles
// if (mouseX > 0 && mouseX < 500){
// // fill(0, 191, 255, this.alpha);
// // ellipse();
//
//
// }

}
//insert umbrella images

 //drawloop end
 function alert1(){
   if (hk1alert==false){
     alert("you just teargassed a protester!")
   hk1alert = true;
   }

 }

 function alert2(){
   if (hk2alert=false){
   alert("you just teargassed a protester!")
   hk2alert = true;
 }
 }
 function alert3(){
      if (hk3alert=false){
   alert("you just teargassed a protester!")
   hk3alert = true;
 }
 }
 function alert4(){
      if (hk4alert=false){
   alert("you just teargassed a protester!")
   hk4alert = true;
 }
 }

class Particle {

  constructor(_x, _y, _vx, _vy) {
    this.x = _x;
    this.y = _y;
    this.vx = _vx + random(-1.5, 1);
    this.vy = _vy + random(0, 1);
    this.alpha = 155;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    // add perlin noise here
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 2;
  }

  show() {
    noStroke();
    //stroke(255);

    if (mouseX >1 && mouseX < 1000){
      image(hkflower, this.x, this.y, 20, 20)
      // fill(60, 170, 0, this.alpha);
      // ellipse(this.x, this.y, 36);
      // fill(152, 251, 0, this.alpha);
      // ellipse(this.x - 30, this.y - 15, 15);
    }
    else{
      fill(152, 251, 10, this.alpha);
    ellipse(this.x, this.y, 36);
    fill(152, 251, 0, this.alpha);
    ellipse(this.x - 30, this.y - 15, 15);
  }


  }

}

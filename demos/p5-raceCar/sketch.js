// Lives stream from class demo is here: https://youtu.be/vE6GQu9cQCE
// final demo (but with competed racecar shape): https://art75.github.io/in-class-exercises/p5_master/p5-exercise-1/index.html


let carX = 50;
let vroom;
let carSpeed = 3;
let carAcc = .5;
let raceStarted = false;


function setup() {
  createCanvas(500, 500);

  vroom = new p5.Oscillator('square');
}

function draw() {
  background(150, 50, 255, 80);

  // make start button
  rect(0, height - 50, 50, 50);

  // tie sound frequence to carX
  vroom.freq(carX);


  if (raceStarted === true) {
    if (carX >= 500) {
      carX = -50;
      carSpeed = 3;
    } else { // otherwise it's just increasing by 3
      carSpeed += carAcc;
      carX += carSpeed;
    }

  }
  // drawing car body
  noStroke();
  fill(255, 50, 50);
  triangle(carX, 50, carX + 60, 80, carX, 80);

  // drawing car wheels
  fill(0);
  ellipse(carX, 80, 20, 20);
  ellipse(carX + 50, 80, 20, 20);
}


// check to see if it is over button
function mousePressed() {
vroom.start();
  if (mouseX >= 0 && mouseX <= 50 && mouseY <= height && mouseY >= height - 50) {
    raceStarted = !raceStarted;
  }

}

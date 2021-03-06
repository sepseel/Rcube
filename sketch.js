var C, U;
var rotx = 0;
var roty = 0;
const W = 200;
const colors = ['yellow', 'orange', 'green', 'white', 'red', 'blue']
const faces = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
  [-1, 0, 0],
  [0, -1, 0],
  [0, 0, -1]
];


function preload() {
  // runs before setup
  img = loadImage('img/grid.jpg')
}

function setup() {
  // runs once on startup
  createCanvas(windowWidth, windowHeight, WEBGL);
  top = createGraphics(windowWidth, windowHeight*0.90);
  bot = createGraphics(windowWidth, windowHeight*0.10);
  // make a new cube object
  C = new Cube(W);
  U = new Ui();
}

function draw() {
  // repeats every frame
  background(50);

  // camera movement
  push();
  rotateX(rotx);
  rotateY(roty);
  
  // draw the cube
  C.show();
  pop();

  U.show();
}

function mouseDragged() {
  // executes when the mouse is dragged acros the canvas
  let rate = 0.01;
  rotx += (pmouseY - mouseY) * rate;
  roty += (pmouseX - mouseX) * rate;
}

function keyPressed() {
  C.Rot(key);
}

function mouseClicked() {
  U.clicked(mouseX, mouseY);
}

function rX(pos, angle) {
  let x = pos.x;
  let y = Math.round(pos.y * Math.cos(angle) - pos.z * Math.sin(angle));
  let z = Math.round(pos.y * Math.sin(angle) + pos.z * Math.cos(angle));
  return new Coord(x, y, z);
}

function rY(pos, angle) {
  let x = Math.round(pos.z * Math.sin(angle) + pos.x * Math.cos(angle));
  let y = pos.y;
  let z = Math.round(pos.z * Math.cos(angle) - pos.x * Math.sin(angle));
  return new Coord(x, y, z);
}

function rZ(pos, angle) {
  let x = Math.round(pos.x * Math.cos(angle) - pos.y * Math.sin(angle));
  let y = Math.round(pos.x * Math.sin(angle) + pos.y * Math.cos(angle));
  let z = pos.z;
  return new Coord(x, y, z);
}



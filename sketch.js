let button;

let value1 = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;
let value5 = 0;
let value6 = 0;
let value7 = 0;
let value8 = 0;


function setup() {
  
  createCanvas(600, 600);
  
  addGUI();
}

function draw() {
  
  background(255);
    
  rectMode(CENTER);
  colorMode(HSB);
  
  let colorA = color(mouseX, 50, 100);
  let colorB = color(mouseX * 1.5, 50, 100);
  let colorC = color(mouseX * 2, 50, 100);
  let colorD = color(mouseX * 2.5, 50, 100);
  let colorE = color(mouseX * 3, 50, 100);

  noStroke();  
  fill(colorA);
  rect(width/2, height/2, 600 + value1, 600 + value2); 
  fill(colorB);
  rect(width/2, height/2, 450 + value3, 450 + value4);
  fill(colorC);
  rect(width/2, height/2, 250 + value5, 250 + value6);
  fill(colorD);
  rect(width/2, height/2, 100 + value7, 100 + value8);

  for (let i = 0; i < 600; i++) {
  let r = random(800);
  stroke(colorE);
  line(0, i, 0 + r, i);
  }
}

function addGUI() {

  button = createButton("randomise the shapes");
  button.mousePressed(handleButtonPress); 

}

function handleButtonPress()

{
  value1 = random(0,400);
  value2 = random(0,350);
  value3 = random(0,300);
  value4 = random(0,250);
  value5 = random(0,200);
  value6 = random(0,150);
  value7 = random(0,100);
  value8 = random(0,50);  
}
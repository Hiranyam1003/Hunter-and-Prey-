var Bubble
var hunter
var bullet
var lion

function preload(){
  hunter_img = loadImage("/Images/hunterImage.png");
  bubble_img = loadImage("/Images/deerImage.png")
  bullet_img = loadImage("/Imges/arrowImage.png")
}  

  function setup() {
  createCanvas(800,400);
  hunter = createSprite(200,50,50,50);
  Bubble = createSprite(200, 380, 50, 50);
  lion = createSprite(200, 380, 50, 50);
  bullet = createSprite(200,50,50,50);
  
  }

function draw() {
  background(255,255,255);  
  drawSprites();
  
}
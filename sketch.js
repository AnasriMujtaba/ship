
var ship, sea;
var shipimage,seaimage;
var edges;

function preload(){

seaimage=loadAnimation("sea.png");
shipimage=loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(600,300);
 
  sea=createSprite(600,150,600,300);
  sea.addAnimation("background", seaimage);
  sea.scale=0.2;
  sea.velocityX=-1;

  ship=createSprite(50,200,20,50);
  ship.addAnimation("running", shipimage);
  edges=createEdgeSprites();

  ship.scale=0.25;
  ship.x=90;
  ship.y=300;
}

function draw() {
  background("blue");

if(sea.x<0) {
  sea.x=300
}

ship.collide(edges[3])
drawSprites();
}

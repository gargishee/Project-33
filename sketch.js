const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var world, engine;

var backgroundImg;
var snow1;

function preload() {
  backgroundImg = loadImage("snow2.jpg");
  snowImg = loadImage("snow5.webp");
  snowImg.scale = 0.8;
  snowImg2 = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(backgroundImg);  

  Engine.update(engine);

  snow1.display();
  snow2.display();

  if (frameCount % 30 === 0) {
    snows = createSprite(random(100, 700), 0, 50, 50);
    snows.scale = 0.1;
    snows.velocityY = 6;
    var rand = Math.round(random(1,2));
    switch(rand){
    case 1: snows.addImage("snow1",snowImg);
    break;
    case 2: snows.addImage("snow2", snowImg2);
    break;
    }
}

  drawSprites();
}
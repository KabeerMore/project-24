const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600, 10);

  ground = new Ground(700, 680, 1800, 20);
  ground.shapeColor="blue";

  dustbinB = new Dustbin(1200, 660, 200, 20);
  dustbinL = new Dustbin(1100, 610, 20, 100);
  dustbinR = new Dustbin(1300, 610, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  Engine.update(engine);

  paper.display();

  ground.display();

  dustbinL.display();
  dustbinB.display();
  dustbinR.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:22, y: -22})
  }
}
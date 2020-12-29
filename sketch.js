
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	paper = new Paper(200, 595, 25)
	ground = new Ground(800,600,1600,20)
	dustbin1 = new Dustbin(1200, 595, 250, 20)
	dustbin2 = new Dustbin(1080, 530, 20, 150)
	dustbin3 = new Dustbin(1320, 530, 20, 150)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  paper.display()
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:145, y:-145})
	}
}




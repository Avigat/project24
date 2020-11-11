var bar1,bar2,bar3;
var paperObject,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(1200, 600);
	keyPressed()

	engine = Engine.create();
	world = engine.world;

	paperObject=new paper(200,450,70);

	ground = new Ground(width/2,500,width,10);

	bar1 = new Bin(750, 430, 20, 120);
	bar2 = new Bin(870, 430, 20, 120);
	bar3 = new Bin(810, 490, 120, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();
  ground.display();
  bar1.display();
  bar2.display();
  bar3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:200,y:-200})
	}
}
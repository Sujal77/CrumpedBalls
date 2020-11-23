
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, wall,wall2,wall3;
var grounds;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	grounds = new ground(width/2, 620,width,20)
	
	

	ball= new paper(100,150,20)

	wall = new dustbin(1200,600)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  ball.display();
  grounds.display();
  wall.display();
  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:17,y:-32})
	}
}




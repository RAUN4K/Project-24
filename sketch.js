const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbin;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	World.add(world, ground);

	paper1 = new Paper(100,650,width,height);
	World.add(world, paper1);

	dustbin = new Dustbin(200,200);
	World.add(world, dustbin);
	
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255);


  dustbin.display();
  paper1.display();

  ground.display();
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{ x:85, y:-85});
	}
}



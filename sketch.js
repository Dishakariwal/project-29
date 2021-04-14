
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinImg,dustbingreen;

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100,600,10)

	Ground = new ground(400,680,800,20)

	leftSide = new dustbin(550, 620, 20, 100);
   bottom = new dustbin(610, 660, 100, 20); 
   rightSide = new dustbin(670, 620, 20, 100);
    
   Engine.run(engine); 
  
}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);

  paper.display()

  Ground.display()

  leftSide.display()
  bottom.display()
  rightSide.display()
 

  drawSprites();

}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}
}
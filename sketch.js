const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var planks,planks2,bottom_planks;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world; 
    var option={
	isStatic:true
}


   
	bottom_planks =createSprite(600,665,200,20);
	bottom_planks=new End(600,665,200,20);
    bottom_planks.shapeColor=("red");
	planks =createSprite(700,640,20,50);
	planks=new End(700,640,20,50);
	planks.shapeColor=("red");
	planks2 =createSprite(500,640,20,50);
	planks2=new End(500,640,20,50);
	planks2.shapeColor=("red");
	trash=new Paper(200,200,50);
	ground=Bodies.rectangle(200,height,width,20,option);
	World.add(world,ground);
	World.add(world,trash);
	Engine.run(engine);

	
}


function draw() {
	background("white");
	rectMode(CENTER);
	Engine.update(engine);
	trash.display();
	bottom_planks.display();
	drawSprites();
}  
function keyPressed() {
	if(keyCode==UP_ARROW){
 Matter.Body.applyForce(trash.body,trash.body.position,{x:160,y:-220});

	}
}

	
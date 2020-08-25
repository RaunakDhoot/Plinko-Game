
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var paperImg;
var ground1
var division1;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight=300

function preload()
{
	
}

function setup() {
	createCanvas(480,800);


	engine = Engine.create();
	world = engine.world;

	

	ground1 = new Ground(0,725,1000,20)





	

	



	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  

 

  for(var k = 0;k <=width; k = k +80){
	  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
  }
  
  }






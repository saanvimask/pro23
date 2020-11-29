var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	
	leftBoxSprite=createSprite(width/2,650, 200, 20);
	leftBoxSprite.shapeColor=color(255,0,0);
	bottomBoxSprite=createSprite(width/2.7,610, 20, 100);
	bottomBoxSprite.shapeColor=color(255,0,0);
	rightBoxSprite=createSprite(width/1.6,610, 20, 100);
	 rightBoxSprite.shapeColor=color(255,0,0);
	 


	 leftBoxBody = Bodies.rectangle(370, 635, 10,70 , {isStatic:true} );
 	World.add(world, leftBoxBody);
 	bottomBoxBody = Bodies.rectangle(400, 655, 50,10 , {isStatic:true} );
 	World.add(world, bottomBoxBody);
 	rightBoxBody = Bodies.rectangle(430, 635, 10,70 , {isStatic:true} );
	World.add(world, rightBoxBody);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);

	function keyPressed() {
		//Moving helicopterSprite towards left when down arrow key is pressed and packageSprite's y position is less than 200.
		if (keyCode === DOWN_ARROW && packageSprite.y < 200) {
			helicopterSprite.x=helicopterSprite.x-30;    
			if(packageSprite.y < 200) {
				translation={x:-30,y:0}
				Matter.Body.translate(packageBody, translation)	
			}
		} 
    
  }
}


}

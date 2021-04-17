
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,height,1200,20)

	hammer = new Hammer(100, 100)

	stone = new Stone(570, 500, 60, 60)

  rubber1 = new Rubber(130, 120, 22)
  rubber2 = new Rubber(110, 120, 22)
  rubber3 = new Rubber(150, 120, 22)
  rubber4 = new Rubber(170, 120, 22)
  rubber5 = new Rubber(190, 120, 22)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();

  hammer.display();

  stone.display();
  rubber1.display();
  rubber2.display();
  rubber3.display();
  rubber4.display();
  rubber5.display();
 
}
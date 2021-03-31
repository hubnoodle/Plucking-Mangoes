
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, stone, boy;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10
var slingshot;

function preload(){
  boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1050,580,450,600)
	ground = new Ground(600,548,1200,15)
  //ground = new Ground(width/2,600,width,20);

	stone = new Stone(235,420,70,70)
	

  mango1=new Mango(1100,100,30,30);
  mango2=new Mango(1170,130,30,30);
	mango3=new Mango(1010,140,30,30);
	mango4=new Mango(1000,70,40,40);
	mango5=new Mango(1100,70,40,40);
	mango6=new Mango(1000,230,50,50);
	mango7=new Mango(900,230,25,25);
	mango8=new Mango(1140,150,25,25);
	mango9=new Mango(1100,230,25,25);
	mango10=new Mango(1200,200,30,30);
	mango11=new Mango(1120,50,35,35);
	mango12=new Mango(900,160,45,45)

	slingshot = new SlingShot(stone.body,{x:235,y:420})

	Engine.run(engine);
  
}

function draw() {
 
  background(230);

  textSize(25);
  text("Press the space bar to get another chance to play!", 50 , 50);
  image(boy ,200,340,200,300);

  tree.display();
  ground.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  slingshot.display()

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body, {x:235,y:420})
    slingshot.attach(stone.body);
  }
}

function detectollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.width+lstone.width){
    Matter.Body.setStatic(lmango.body,false)
  }
}

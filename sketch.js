
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world,engine,ground,ground1,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16,block17,block18;
var block19,block20,block21,block22,block23,block24,block25;
var polygon,slingShot,base;
var score=0,backgroundImg;

function preload() {
  defaultbg = loadImage("bg1.jpg");
  getBackgroundImg();
}

function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  base=new Ground(650,500,1300,5)
	ground=new Ground(600,450,300,10);
	ground1=new Ground(1100,300,250,10)

  //base
	block1=new Block(510,425,30,50);
	block2=new Block(540,425,30,50);
	block3=new Block(570,425,30,50);
	block4=new Block(600,425,30,50);
	block5=new Block(630,425,30,50);
	block6=new Block(660,425,30,50);
	block7=new Block(690,425,30,50);
	block8=new Block(1040,275,30,50);
	block9=new Block(1070,275,30,50);
	block10=new Block(1100,275,30,50);
	block11=new Block(1130,275,30,50);
	block12=new Block(1160,275,30,50);

  //second1
	block13=new Block(540,400,30,50);
	block14=new Block(570,400,30,50);
	block15=new Block(600,400,30,50);
	block16=new Block(630,400,30,50);
  block17=new Block(660,400,30,50);
  //top2
  block18=new Block(1100,215,30,50);

  //third

  block19=new Block(570,375,30,50);
  block20=new Block(600,375,30,50);
  block21=new Block(630,375,30,50);

  //second2
  
  block22=new Block(1070,245,30,50);
  block23=new Block(1100,245,30,50);
  block24=new Block(1130,245,30,50);

  //top1
  block25=new Block(600,350,30,50);

  polygon=new Polygon(300,300,60,60);

  slingShot=new SlingShot(polygon.body,{x:300,y:300});
	Engine.run(engine);
  
}


function draw() {
if(backgroundImg){

    background(backgroundImg);
}
else{
    background(defaultbg);
}

  rectMode(CENTER);

  base.display();
  ground.display();
  ground1.display();

  fill(136,204,234);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(255,192,203);
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill(63,224,208);
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display(); 

  fill(136,204,234);
  block25.display();

  slingShot.display();
  
  polygon.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();

  textSize(25);
  fill("dodgerblue");
  text("Drag The Hexagonal Stone and Release it to launch it towards the block",30,50);
  text("SCORE :"+score,20,480);
  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon.body);
      Matter.Body.setPosition(polygon.body, {x: 300 , y: 300});
      
  }
}

async function getBackgroundImg(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await response.json();
  var datetime=responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour>=06 && hour<=18){
      bg= "bg1.jpg";
  }
  else{
      bg= "bg2.jpg";
  }
  backgroundImg=loadImage(bg);
}





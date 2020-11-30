//Namespacing

const Engine=Matter.Engine;  //universe
const World=Matter.World; //globe
const Bodies= Matter.Bodies; //objects

var engine,world,box1,box2,pig1,pig2,box3,box4,box5,log1,log2,log3,log4;
var ground;


function setup() {
  createCanvas(1200,800);

engine=Engine.create();   // create the Universe
world = engine.world;

box1= new Box(700,320,70,70);
box2=new Box(920,320,70,70);
box3=new Box(700,240,70,70);
box4=new Box(920,240,70,70);
box5=new Box(810,160,70,70);

pig1=new Pig(810,320);
pig2=new Pig(810,240);

log1=new Log(810,180,300,PI/2);
log2=new Log(810,260,300,PI/2);
log3=new Log(760,120,150,PI/7);
log4=new Log(870,120,150,-PI/7);

bird=new Bird(100,100);

ground=new Ground(600,785,1200,50);

}

function draw() {
  background(0,0,0);  

  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird.display();
}
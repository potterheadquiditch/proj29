const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground   = new Ground(600,height,1200,20);
    platform = new Ground(250+50,350,300,20)
    bird     = new Bird(50,300);
    box1     = new Pig(130+50,320)
    box2     = new Pig(190+50,320)
    box3     = new Pig(250+50,320)
    box4     = new Pig(310+50,320)
    box5     = new Pig(370+50,320)
    box6     = new Pig(160+50,270)
    box7     = new Pig(220+50,270)
    box8     = new Pig(280+50,270)
    box9     = new Pig(340+50,270)
    box10    = new Pig(190+50,220)
    box11    = new Pig(250+50,220)
    box12    = new Pig(310+50,220)
    box13    = new Pig(220+50,170)
    box14    = new Pig(280+50,170)
    box15    = new Pig(250+50,120)

    slingshot = new SlingShot(bird.body,{x:50, y:300});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();

      bird.display();
      bird.display();
      box1.display();
      box2.display();
      box3.display();
      box4.display();
      box5.display();
      box6.display();
      box7.display();
      box8.display();
      box9.display();
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
 platform.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
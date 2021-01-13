
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground, ball, rope;
var brick1;


function setup() {
  createCanvas(1200,800);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  //ball = createSprite(100,200,20)

  ground = new Ground(600,780,1200,20);
  ball= new Ball(200,200,80,80);
  rope=new Rope(ball.body, {x:500, y:80});

  brick1 = new Brick(900,100,80,70);
  brick2 = new Brick(900,100,80,70);
  brick3 = new Brick(900,100,80,70);
  brick4 = new Brick(900,100,80,70);
  brick5 = new Brick(900,100,80,70);
  brick6 = new Brick(900,100,80,70);
  brick7 = new Brick(900,100,80,70);

  brick8 = new Brick(800,100,80,70);
  brick9 = new Brick(800,100,80,70);
  brick10 = new Brick(800,100,80,70);
  brick11 = new Brick(800,100,80,70);
  brick12 = new Brick(800,100,80,70);
  brick13 = new Brick(800,100,80,70);
  brick14 = new Brick(800,100,80,70);

  brick15 = new Brick(700,100,80,70);
  brick16 = new Brick(700,100,80,70);
  brick17 = new Brick(700,100,80,70);
  brick18 = new Brick(700,100,80,70);
  brick19 = new Brick(700,100,80,70);
  brick20 = new Brick(700,100,80,70);
  brick21 = new Brick(700,100,80,70);

  //brick22 = new Brick(600,100,100,70);
 // brick23 = new Brick(600,100,100,70);
  //brick24 = new Brick(600,100,100,70);
  //brick25 = new Brick(600,100,100,70);


}

function draw() {
  background(0); 
  rectMode(CENTER);
  //Engine.update(engine);

  ground.display();
  ball.display();
  rope.display();
  
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  
  brick8.display();
  brick9.display();
  brick10.display();
  brick11.display();
  brick12.display();
  brick13.display();
  brick14.display();

  brick15.display();
  brick16.display();
  brick17.display();
  brick18.display();
  brick19.display();
  brick20.display();
  brick21.display();

 // brick22.display();
  //brick23.display();
  //brick24.display();
  //brick25.display();

 
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

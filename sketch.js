//3 important componnts:
//1.Matter.Engine => Physics Engine
//2.Matter.World => World / Earth
//3.Matter.Bodies => objects -> rect,circular
const Engine = Matter.Engine; //namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,object;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var groundOptions = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,380,400,20,groundOptions);
  World.add(world,ground);


  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
  
}

function draw() {
  background(0);
  Engine.update(engine);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20); 
}
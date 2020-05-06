var Engine=Matter.Engine,
World=Matter.World,
Bodies=Matter.Bodies;

var sun;
var venus;
var earth;
var mars;


function setup(){
  createCanvas(1200,600);
engine=Engine.create();
world=engine.world;
Engine.run(engine);
var options={
  isStatic:true
}

sun=Bodies.rectangle(600,300,200,options);
venus=Bodies.rectangle(870,340,55,options);
earth=Bodies.rectangle(300,255,65,options);
mars=Bodies.rectangle(150,127,70,options);



World.add(world,box);
}
function draw(){
  background(51);



  fill("yellow")
  strokeWeight(5);
  stroke("orange")
ellipseMode(CENTER);
ellipse(sun.position.x,sun.position.y,200);




fill("red")
strokeWeight(5);
stroke("orange")
ellipseMode(CENTER);
ellipse(venus.position.x,venus.position.y,55);






fill("blue")
strokeWeight(5);
stroke("green")
ellipseMode(CENTER);
ellipse(earth.position.x,earth.position.y,65);






fill("red")
ellipseMode(CENTER);
ellipse(mars.position.x,mars.position.y,70);








}

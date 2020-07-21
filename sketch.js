const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Ground1 ;
var canvas ;
function setup(){                    
    canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    Ground1 = new Ground (200 ,370,300,10) ;

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   Ground1.display();
}
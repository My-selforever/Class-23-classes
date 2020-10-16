const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new BoxO(200,200,10,10);
    box2 = new BoxO(100,100,15,20);
    //console.log(box1);
    //console.log(box2);
    ground = new Ground();
   
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    


    
}
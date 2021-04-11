const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1, rubber2, rubber3, rubber4, rubber5;
var stone;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(600,598,5);
    rubber2 = new Rubber(601,598,5);
    rubber3 = new Rubber(602,598,5);
    rubber4 = new Rubber(603,598,5);
    rubber5 = new Rubber(604,598,5);
    stone = new Stone(300,590,70,70);
    iron = new Iron(1000,590,50,50);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    stone.display();
    iron.display();
}
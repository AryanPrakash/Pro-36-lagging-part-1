const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var ground1,ground2,hero1,rope1;
var monster;

var block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15,block16

var bg,bgimg;
function preload() {
    bgimg=loadImage("GamingBackground.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(50,350,1350,10);
    hero1=new Hero(600,20,100,50);
    rope1=new Rope(hero1.body,{x:40,y:50})
    monster = new Monster(950,210,100,40);

    ground2 = new Ground(950,220,250,10);

    //blocks
    //level 1
    block1 = new Block(600,20,30,30);
    block2 = new Block(550,20,30,30);
    block3 = new Block(500,20,30,30);
    block4 = new Block(450,20,30,30);
    block5 = new Block(650,20,30,30);

    //level 2
    block6 = new Block(600,40,30,30);
    block7 = new Block(550,40,30,30);
    block8 = new Block(500,40,30,30);
    block9 = new Block(450,40,30,30);
    block10 = new Block(650,40,30,30);

    //level 3
    block11 = new Block(600,60,30,30);
    block12 = new Block(550,60,30,30);
    block13 = new Block(500,60,30,30);
    block14 = new Block(450,60,30,30);
    block15 = new Block(650,60,30,30);
}

function draw(){
    background(bgimg);
    Engine.update(engine);

    
    hero1.display();
    rope1.display();
    fill("white")
    ground1.display();
    monster.display();
    ground2.display();
    //blocks
    block1.display();
    block2.display();
    block3.display();
    //level2
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    //level 3
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    //level4
    //block16.display();
    //block17.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(hero1.body, { x: mouseX , y: mouseY });
}

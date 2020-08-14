const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mango,treeIMG,manSprite
var chain,manIMG,treeSprite,ground

function preload(){
  treeIMG=loadImage("sprites/TREE.png")
  manImg=loadImage("sprites/manne.png")
}

function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;

   treeSprite=createSprite(1000,200,40,40)
   treeSprite.addImage(treeIMG)

   manSprite=createsprite(160,400,20,20)
   manSprite.addImage(manIMG)

    ground=new Ground(600,height,1200,20)

    chain=new Chain(mango1.body,{x:1010,y:200})
    chain2=new Chain(mango2.body,{x:910,y:200})
    chain3=new Chain(mango3.body,{x:1110,y:200})
    chain4=new Chain(mango4.body,{x:1010,y:155})
    chain5=new Chain(mango5.body,{x:1010,y:255})


    mango1=new Mango(1000,200,20,30)
    mango2=new Mango(900,200,20,30)
    mango3=new Mango(1100,200,20,30)
    mango4=new Mango(1000,150,20,30)
    mango5=new Mango(1000,250,20,30)

    Engine.run(engine)
 
}

function draw() {
  background(255,255,255);  

  drawSprites()
}






 

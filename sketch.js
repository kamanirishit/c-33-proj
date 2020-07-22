const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
let score;
var engine,world;
let division=[];
let plinko1=[];
let plinko2=[];
var particle=[];
let ground,ball;

function preload(){
 
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  score=0;
  for(let i=0;i<5;i++){
   let x=30+170*i;
   division[i]=new Ground(x,350,10,90);
 }
 
 ground=new Ground(400,397,width,5);
 for (let i=0;i<5;i++){
  let x=30+170*i;
  plinko1[i]=new Plinko(x,100,20,20);
 }
 for (let i=0;i<5;i++){
  let x=30+170*i;
  plinko2[i]=new Plinko(x,230,20,20);
 }
  Engine.run(engine);
}
function mousePressed(){
  if(particle.length<=5){
    ball=new Plink(mouseX,20,25,25);
  particle.push(ball);
  }
  
}


function draw() {
  background(0);  
  for(let i=0;i<division.length;i++){
    division[i].display();
  }
  ground.display();
  for(let i=0;i<5;i++){
     plinko1[i].display();
  }
  for(let i=0;i<5;i++){
    plinko2[i].display();
 }
 for (let i=0;i<particle.length;i++){
   if(particle[i].body!==null){
   particle[i].display();
   }
   if(particle[i].body.position.y>360){
   if(particle[i].body.position.x>29 && particle[i].body.position.x<198){
     score=score+500;
    Matter.Body.setPosition(particle[i].body,{x:1000,y:200});
   
   }
   if(particle[i].body.position.x>198 && particle[i].body.position.x<541){
    score=score+100;
   Matter.Body.setPosition(particle[i].body,{x:1000,y:200});
  
  }
  if(particle[i].body.position.x>538 && particle[i].body.position.x<708){
    score=score+200;
   Matter.Body.setPosition(particle[i].body,{x:1000,y:200});
  
  }
   }
 }
 push();
 fill("white");
 textSize(30);
 text("100",260,323);
 text("100",450,323);
 text("200",600,323);
 text("500",95,323);
 text(score,668,29);
 
}
//for(let i=0;i<particle.length;i++){

//}


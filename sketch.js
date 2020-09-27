var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=250;
var ground, particle, turn;
var score, gameState, rand;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  score =0;
  turn = 0;
 
  gameState = "START";

  



   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, 675, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 textSize(25);
 fill("fuchsia");
 text("400", 420, 575);
 text("400", 340, 575);
 text("350", 260, 575);
 text("350", 500, 575);
 text("300", 580, 575);
 text("300", 180, 575);
 text("250", 100, 575);
 text("250", 660, 575);
 text("200", 740, 575);
 text("200", 20, 575);

 ground.display();
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   //if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
  // }
 
  //for (var j = 0; j < particles.length; j++) {
   
   //  particles[j].display();
  // }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
   if(particle !== null) {
    particle.display1();
      if(particle.body.position.y > 550) {
        if(particle.body.position.x > 5 && particle.body.position.x < 75) {
          score = score + 200;
          particle = null;
          if(turn >= 5) gameState="END";
        }
      }
  }
}

function mousePressed() {
  if(gameState !== "END") {
    particle = new Particle(mouseX, 10, 10);
    turn++;
  }
}

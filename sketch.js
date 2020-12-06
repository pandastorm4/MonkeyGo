
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup
var score = 0;
var ground

function preload(){

  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
}



function setup() {
createCanvas(800,400);
monkey = createSprite(100,340,20,50);
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.1;
  
 ground = createSprite(400,350,900,10);
ground.x = ground.width/2;
 ground.velocityX = -4;
 console.log(ground.x);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("white");
 if(keyDown("space")){
   monkey.velocityY = -12;
 }   
  monkey.velocityY = monkey.velocityY + 0.8;
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  monkey.collide(ground);
  text("Survival Time: " + score, 100,50);
  score = score + Math.round(getFrameRate()/60);
 
  
  
  food();
  obstacles();
  drawSprites();
}

function food() {
  if(frameCount % 80 === 0){
  banana = createSprite(600,340,20,50)
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;
  banana.lifetime = 200;
    
  bananaGroup.add(banana);
  }
}

function obstacles(){
 if(frameCount % 300 === 0){
obstacle = createSprite(600,325,10,40); 
obstacle.velocityX = -3;
obstacle.addImage(obstacleImage);
obstacle.lifetime = 300;
obstacle.scale = 0.1;
obstacleGroup.add(obstacle);
 }
}





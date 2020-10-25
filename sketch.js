
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
 var ground,obstacle,score,bannanaGroup,obstacleGroup;
var play,gamestate=play; 


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(750, 600)
monkey=createSprite(100,500)
 monkey.addAnimation("monkry",monkey_running) 
monkey.scale=0.17


ground=createSprite(300,550,750,4)
score=0

gamestate=play
bannanaGroup=createGroup()
obstacleGroup=createGroup()


}


function draw(){
 
  background(600);
  background("white")
  background.velocityX=4;
   
   if(obstacleGroup.isTouching(monkey)){
      
      
  score=score-5   
      
      obstacleGroup.destroyEach()
    }
  
  if(gamestate===play){
    if(bannanaGroup.isTouching(monkey)){
      
     bannanaGroup.destroyEach() 
      score=score+1
    }
    
 
    
    
  }
  
 
  if(keyDown("space")&& monkey.y>=490){
   
  monkey.velocityY=-22 
 }
   
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  

  

  
 
  
  

  
  
  
  
  

  
 
  
  
  
  
  
  
  
  
  
  bananna()

  obstacle()
  
  
  monkey.collide(ground);
  drawSprites()  

text ("survival:"+score,590,50);
}


function obstacle(){

 if(frameCount %300===0){
   
var obstacle=createSprite(400,500)  
   
 obstacle.addAnimation("obstacle",obstacleImage)  
 obstacle.scale=0.27  
 obstacle.velocityX=-7 
 obstacle.lifetime=400
 
 obstacleGroup.add(obstacle)
 }
  
  
  
  
  
}
function bananna(){
  
  
if(frameCount %80===0){
   
var bananna=createSprite(400,500)  
  bananna.y=(random(200,400))
 bananna.addAnimation("bananna",bananaImage)  
 bananna.scale=0.27  
bananna.velocityX=-6  
  
  bananna.lifetime=400

bannanaGroup.add(bananna)


}
  
  
  
  
}


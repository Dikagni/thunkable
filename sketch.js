var fruits,enemy,sword,score;
var fruit1,fruit2,fruit3,fruit4,swordImage,enemyImage;
var fruitgroup,enemygroup,gameoverImage,gameoverSound,cuttingSound;
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  gameoverImage=loadImage("gameover.png");
  swordImage=loadImage("sword.png");
  enemyImage=loadAnimation("alien1.png","alien2.png");
  gameoverSound=loadSound("gameover.mp3");
  cuttingSound=loadSound("knifeSwooshSound.mp3")
 
 
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  sword=createSprite(250,250);
   sword.addImage(swordImage);
  sword.scale=0.6;
  fruitgroup=new Group;
  enemygroup=new Group;
  score=0;
}


function draw(){
  background("skyblue");
  if(gameState===PLAY){
     sword.y=World.mouseY;
  sword.x=World.mouseX;
  fruitf()
  enemyf()
  //sword.addImage(swordImage);
  if(fruitgroup.isTouching(sword)){
    fruitgroup.destroyEach();
    score=score+2;
    cuttingSound.play()
  }
  if(sword.isTouching(enemygroup)){
    enemygroup.destroyEach()
    gameState=END;
    gameoverSound.play()
  
  }
    
    
  }
  else if(gameState===END){
     sword.addImage(gameoverImage);
    sword.x=275;
    sword.y=275;
    sword.velocityX=0;
    sword.velocityY=0;
   
    
  }
  
  
  
  
  
  
  
  
  drawSprites()
  textSize=30;
  text("score="+score,450,20)
  
  

}
function fruitf(){
  if(World.frameCount%80===0){
    fruits=createSprite(windowWidth,200,20,20);
    fruits.scale=0.2
    r=Math.round(random(1,4));
    if(r==1){
      fruits.addImage(fruit1);
    }
    else if(r==2){
      fruits.addImage(fruit2);
    }
    else if(r==3){
      fruits.addImage(fruit3);
    }
    else{
      fruits.addImage(fruit4);
    }
    fruits.y=Math.round(random(500,20));
    fruits.velocityX=-(11+score/4);
    fruits.setLifetime=100;
    fruitgroup.add(fruits);
  }
}
function enemyf(){
  if(World.frameCount%80===0){
    enemy=createSprite(windowWidth,200,20,20);
    enemy.addAnimation("moving",enemyImage);
    enemy.y=Math.round(random(500,20));
      enemy.velocityX=-(12+score/10);
    enemygroup.add(enemy);
  }
  
}














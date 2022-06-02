var PLAY=1;
var END=0;
var gameState=1;

var canvas,bg;
var player
var playeranim
var monster
var monsteranim

var obstacle, obstacleImage, obstacleGroup
var coin, coinImage, coinGroup
var boost, boostImage, boostGroup

var realm
var invisiblePath

function preload() {
 playeranim = loadAnimation ("images/girl1.png","images/girl1.png")   
 monsteranim = loadAnimation ("images/skele1.png","images/skele2.png","images/skele3.png","images/skele4.png")

 boostImage = loadImage ("images/boost.png")
 coinImage = loadImage ("images/coin.png")
 obstacleImage = loadImage ("images/obstacle.png")

 bg = loadImage ("images/bg2.png")
}

function setup(){
   createCanvas(800,500);

   realm = createSprite(400,250)
realm.addImage(bg)
realm.scale=3.2
realm.velocityX = -5

invisiblePath = createSprite(400,480,800,50)

player = createSprite(500,370)
player.addAnimation("player",playeranim)
player.scale=0.5

monster = createSprite(220,370)
monster.addAnimation("monster",monsteranim)



boostGroup = new Group();
obstacleGroup = new Group();
coinGroup = new Group();


score = 0


}

function draw() {

    background("yellow");

    if (realm.x < 0){
       realm.x = realm.width/2;
      }
    
 if (keyDown("space")){
     player.velocityY = -5
 }
 player.velocityY = player.velocityY + 0.8
 player.collide(invisiblePath);

    drawSprites();
    textSize(30)
    text("Coin : "+score,250,50)
}




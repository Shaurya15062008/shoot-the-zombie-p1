var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.2
  



//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
 
    player.debug = false
    

 
   player.setCollider("rectangle",0,0,300,300)
}

function draw() {
  background('white'); 


  spawnZombie();

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyDown("space")){
  //player.addImage( shooter_shooting )
 // player.addImage()
  player.addImage(shooterImg)
 //player.addImage(shooter_1.png)

}

drawSprites();

}

function spawnZombie(){
  if(frameCount%100==0){
    var ran = random(displayHeight-300, displayHeight- 400)
    zombie = createSprite(displayWidth, ran, 50, 50)
    zombie.addImage(zombieImg);
    zombie.scale = 0.2
    zombie.velocityX = -10;
    zombie.lifetime = 500  

  }

}

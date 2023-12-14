var shooter
var shootAnimation

var zombie

var zombieGroup

function preload(){
   bgImg=loadImage("./assets/bg.jpeg")
   shooterImg=loadImage("./assets/shooter_2.png")
   shooter2Img=loadAnimation("./assets/shooter_1.png","./assets/shooter_3.png")
   shooter2Img.looping=false
   zombieImg=loadImage("./assets/zombie.png")
}

function setup(){
  createCanvas(windowWidth, windowHeight)

  shooter=createSprite(100,windowHeight-115,50,50)
  shooter.addImage("shoot1",shooterImg)
  shooter.addAnimation("shoot",shooter2Img)
  shooter.scale=0.45
  shooter.debug=true
  shooter.setCollider("rectangle",0,0,300,300)
  zombieGroup=new Group()
}

function draw(){
  background(bgImg)
  spawnZombies()

  if (keyDown("UP_ARROW")){
    shooter.position.y-=5
  }
if (keyDown("DOWN_ARROW")){
  shooter.position.y+=5
}
if (keyWentDown("space")){
  shooter.changeAnimation("shoot")
}

if (keyWentUp("space")){
  shooter.changeImage("shoot1")
}

if (zombieGroup.isTouching(shooter)){
  for(var i=0;i<zombieGroup.lenght;i++){
    if (zombieGroup[i].isTouching(shooter)){
      zombieGroup[i].destroy()
    }
  }
}
  drawSprites()
}

function spawnZombies(){
  if (frameCount%70==0){
    zombie=createSprite(width,random(100,500),40,40)
      zombie.velocityX=-3
      zombie.addImage(zombieImg)
      zombie.scale=0.15
      zombie.lifetime=400
      zombie.debug=true
      zombie.setCollider("rectangle",0,0,400,400)
      zombieGroup.add(zombie)
    }
  }

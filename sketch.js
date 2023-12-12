var shooter

var zombie

function preload(){
   bgImg=loadImage("./assets/bg.jpeg")
   shooterImg=loadImage("./assets/shooter_1.png")
}

function setup(){
  createCanvas(windowWidth, windowHeight)

  shooter=createSprite(100,windowHeight-115,50,50)
  shooter.addImage(shooterImg)
  shooter.scale=0.45

}

function draw(){
  background(bgImg)

  if (keyDown("UP_ARROW")){
    shooter.position.y-=5
  }
  if (keyDown("RIGHT_ARROW")){
    shooter.position.x+=5
  }
  if (keyDown("LEFT_ARROW")){
    shooter.position.x-=5
  }
if (keyDown("DOWN_ARROW")){
  shooter.position.y+=5
}
  drawSprites()
}
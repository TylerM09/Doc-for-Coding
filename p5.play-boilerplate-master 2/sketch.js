var Walk, walk_animation
var edges
var Idle, Idle_animation
var Base
var Base2


  



function preload() {
  walk_animation = loadAnimation("SideWalk1.png", "SideWalk2.png", "SideWalk3.png")
  walk2_animation = loadAnimation("OtherSideWalk1.png", "OtherSideWalk2.png", "OtherSideWalk3.png")

 
  Idle_animation = loadAnimation("WAlk1.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  
  



Walk = createSprite(width / 2, height / 2)
Walk.addAnimation("TylerWalk", walk_animation)
Walk.addAnimation("TylerWalk2", walk2_animation)
Walk.addAnimation("Idle", Idle_animation)
Walk.scale = .25

Base = createSprite(width / 3, height / 2 + 10, width, 10 )
Base.shapeColor =("Green")

Base2 = createSprite(25, 250, 70, 30 )
Base2.shapeColor =("Green")

////Base3 = createSprite(width / 3, height / 2 + 10, width, 10 )
//Base3.shapeColor =("Green")

Base4 = createSprite(25, 400, 75, 120 )
Base4.shapeColor =("Green")

//Base5 = createSprite(width / 3, height / 2 + 25, width, 20 )
//Base5.shapeColor =("Green")






edges = createEdgeSprites()

}

function draw() {
  background(255,135,134);
  

  //Walk.addImage("WAlk1.png")

  Movement()



  
  

  Walk.collide(Base)
  Base2.Bounce(Walk)
  
  



  drawSprites();
}

function Movement(){
  if(keyWentUp("D") || keyWentUp("A")){

    Walk.velocityX = 0 

    Walk.changeAnimation("Idle", Idle_animation)

    
  }

  Walk.collide(Base)

  

  if(keyWentDown("D")){

    Walk.velocityX = 5 

    Walk.changeAnimation("TylerWalk2", walk2_animation)

    

    
  }

  if(keyWentUp("SPACE")){

    Walk.velocityY = -12
    
  }

  Walk.velocityY = Walk.velocityY + 0.5



  if(keyWentDown("A")){

    Walk.velocityX = -5

    Walk.changeAnimation("TylerWalk", walk_animation)
  

    

    
  }


}
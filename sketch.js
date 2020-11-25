var monkey, monkey_running
var food, foodImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground, time,monkey_still;
var time = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  foodImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
monkey_still=loadImage("sprite_0.png")


}



function setup() {
  foodGroup = new Group();
  obstacleGroup = new Group();
  monkey = createSprite(80, 315, 10, 10)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.2
  ground = createSprite(400, 395, 900, 20)

  ground.x = ground.width / 2;

}


function draw() {
  createCanvas(600, 400)
  

  textSize(30)
  fill("black")
  text("SurvivalTime:" + time, 200, 50)
  time = Math.round((frameCount / 80))
  if (keyDown("space") && monkey.y >= 200) {
    monkey.velocityY = -14


  }
   if(obstacleGroup.isTouching(monkey)){
     obstacleGroup.setLifetimeEach(-1)
     foodGroup.setLifetimeEach(-1)
obstacleGroup.setVelocityXEach(0)
foodGroup.setVelocityXEach(0)
     //obstacleGroup.setEach(0)
     monkey.velocityX=0;
     ground.velocityX=0;
monkey.addImage(monkey_still)
     
   }
  monkey.velocityY = monkey.velocityY + 0.8
  Food();
  obstacles();
  createEdgeSprites()
  monkey.collide(ground)
  drawSprites()
}

function Food() {

  if (frameCount % 80 === 0) {
    food = createSprite(600, Math.round(random(120, 200)), 20, 20)
    food.addImage(foodImage)
    food.velocityX = -6
    food.scale = 0.18


    food.lifetime = 300;

    foodGroup.add(food)



  }



}


function obstacles() {


  if (frameCount % 200 === 0) {

    obstacle = createSprite(1000, 336, 10, 10)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -8;


    obstacle.scale = 0.35
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle)
  }

}
var fork, forkImage;
var knife, knifeImage;
var bg, bgImage;
var sausage, sausageImage;
var egg, eggImage;
var fish, fishImage;
var bacon, baconImage;
var pan, panImage;
var forkG, knifeG, sausageG,eggG,fishG,baconG;
var points = 0;

//Game States
var PLAY=1;
var END=0;
var gameState=1


function preload(){
forkImage = loadImage("ForkImage.png");
knifeImage = loadImage("KnifeImage.png");
sausageImage = loadImage("SausageImage.png");
eggImage = loadImage("EggImage.png");
fishImage = loadImage("FishImage.png");
baconImage = loadImage("BaconImage.png");
panImage = loadImage("Pan.png");
bgImage = loadImage("kitchen.png");

}

function setup() {
    createCanvas(400,400);
    bg=createSprite(200,400);
    bg.addImage(bgImage);
    bg.velocityY = 3;
    
    pan = createSprite(70,380,20,20);
    pan.addImage("Catching Food",panImage);
    pan.scale = 0.2;

    forkG=new Group();
    knifeG=new Group();
    sausageG=new Group();
    eggG=new Group();
    fishG=new Group();
    baconG=new Group();
   
}

function draw() {
    if(gameState===PLAY){
    background(0);
    pan.x = World.mouseX;
    
    edges= createEdgeSprites();
    pan.collide(edges);
    
    //code to reset the background
    if(bg.y > 200 ){
      bg.y = height/2;
    }
    createFork();
    createKnife();
    createSausage();
    createEgg();
    createFish();
    createBacon();

    if (sausageG.isTouching(pan)) {
        sausageG.destroyEach();
        points=points+50;
      }
      else if(eggG.isTouching(pan)) {
        eggG.destroyEach();
        points=points+100;
      
  
        
      }else if(fishG.isTouching(pan)) {
        fishG.destroyEach();
        points=points+150;
        
    }else if(baconG.isTouching(pan)) {
        baconG.destroyEach();
        points=points+200;
      
        
      
        
      }else{
        if(forkG.isTouching(pan) || knifeG.isTouching(pan)) {
         gameState = END;
          //boy.addAnimation("boy running", endImg);
         
          //boy.scale = 0.08;
          pan.velocityY = 0;
          
          sausageG.destroyEach();
          eggG.destroyEach();
          fishG.destroyEach();
          baconG.destroyEach();
          forkG.destroyEach();
          knifeG.destroyEach();
          
          
      }
    }
    




drawSprites();
textSize(20);
fill(255);
text("Points: "+ points,150,30);
}
if(gameState === END){
textSize(30);
fill("red");
text("Game Over", 130, 200);
}
    }   
    

function createFork() {
    if (World.frameCount % 200 == 0) {
    var fork = createSprite(Math.round(random(50, 350),40, 10, 10));
    fork.addImage(forkImage);
    fork.scale=0.12;
    fork.velocityY = 3;
    fork.lifetime = 127;
    forkG.add(fork);
    }
  }
  function createKnife() {
    if (World.frameCount % 320 == 0) {
    var knife = createSprite(Math.round(random(50, 350),40, 10, 10));
    knife.addImage(knifeImage);
    knife.scale=0.12;
    knife.velocityY = 3;
    knife.lifetime = 127;
    knifeG.add(knife);
    }
  }

  function createSausage() {
    if (World.frameCount % 440 == 0) {
    var sausage = createSprite(Math.round(random(50, 350),40, 10, 10));
    sausage.addImage(sausageImage);
    sausage.scale=0.12;
    sausage.velocityY = 3;
    sausage.lifetime = 127;
    sausageG.add(sausage);
    }
  }

  function createEgg() {
    if (World.frameCount % 530 == 0) {
    var egg = createSprite(Math.round(random(50, 350),40, 10, 10));
    egg.addImage(eggImage);
    egg.scale=0.12;
    egg.velocityY = 3;
    egg.lifetime = 127;
    eggG.add(egg);
    }
  }

  function createFish() {
    if (World.frameCount % 660 == 0) {
    var fish = createSprite(Math.round(random(50, 350),40, 10, 10));
    fish.addImage(fishImage);
    fish.scale=0.12;
    fish.velocityY = 3;
    fish.lifetime = 127;
    fishG.add(fish);
    }
  }

  function createBacon() {
    if (World.frameCount % 760 == 0) {
    var bacon = createSprite(Math.round(random(50, 350),40, 10, 10));
    bacon.addImage(baconImage);
    bacon.scale=0.12;
    bacon.velocityY = 3;
    bacon.lifetime = 127;
    baconG.add(bacon);
    }
  }

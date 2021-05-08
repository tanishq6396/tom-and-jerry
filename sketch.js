var catimg1,catimg2,catimg3;
var mouseimg1,mouseimg2,mouseimg3;
var gardenimgl;
function preload() {
    //load the images here
    gardenimg1=loadImage("images/garden.png");
    catimg1=loadAnimation("images/cat1.png");
    catimg2=loadAnimation("images/cat2.png","images/cat3.png");
    catimg3=loadAnimation("images/cat4.png");
    mouseimg1=loadAnimation("images/mouse1.png");
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("catSleeping",catimg1);
    cat.scale=0.15
    mouse=createSprite(200,600);
    mouse.addAnimation("mousestanding",mouseimg1);
    mouse.scale=0.1
    
}

function draw() {

    background(gardenimg1);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catlastimg",catimg3);
        cat.scale=0.15
        cat.changeAnimation("catlastimg",catimg3);
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      mouse.addAnimation("mouseteasing",mouseimg2);
      mouse.changeAnimation("mouseteasing");
      mouse.frameDelay =25;
      cat.velocityX=-20;
      cat.addAnimation("catrunning",catimg2);
      cat.changeAnimation("catrunning");
  }
  


}

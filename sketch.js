var tom,tomAnimation,tomImg1,tomImg2;
var jerry,jerryAnimation,jerryImg3,jerryImg4;
var gardenImg,garden;




function preload() {
    //load the images here
    tomAnimation = loadAnimation("tomThree.png","tomTwo.png");
    tomImg1 = loadAnimation("tomOne.png");
    tomImg2 = loadAnimation("tomFour.png");
    jerryAnimation = loadAnimation("jerryThree.png","jerryTwo.png");
    jerryImg1 = loadAnimation("jerryOne.png");
    jerryImg2 = loadAnimation("jerryFour.png");
    gardenImg = loadImage("garden.png"); 
}

function setup(){
    createCanvas(800,800);
    garden = createSprite(500,400,1000,800);
    garden.addImage(gardenImg);
   garden.scale = 1;
    //create tom and jerry sprites here
    tom = createSprite(600,600,10,10);
    tom.addAnimation("cat",tomImg1);
    tom.scale=0.125;
  
  jerry = createSprite(300,600,10,10);
    jerry.addAnimation("mouse",jerryImg1);
    jerry.scale=0.0625;
}

function draw() {

  
    //Write condition here to evalute if tom and jerry collide
  if (tom.x - jerry.x <(tom.width / 2 + jerry.width)/2) 
  { tom.addAnimation("catLastStop",tomImg2);
  tom.changeAnimation("catLastStop");
   tom.x = 600;
    tom.velocityX = 0;
   jerry.addAnimation("mouseLastImg",jerryImg2);
  jerry.changeAnimation("mouseLastImg");
  }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
   tom.velocityX = -5;
   tom.addAnimation("catrunning",tomAnimation);
  tom.changeAnimation("catrunning");
  jerry.addAnimation("mouseteasing",jerryAnimation);
  jerry.changeImage("mouseteasing");
   }

}

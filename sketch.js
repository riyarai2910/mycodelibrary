var fixedRect,movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true
  movingRect=createSprite(400,200,80,30);
  movingRect.debug=true
  movingRect.shapeColor="green";
  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="green";
  gameObject3=createSprite(300,100,50,50);
  gameObject3.shapeColor="green";
  gameObject4=createSprite(400,100,50,50);
  gameObject4.shapeColor="green";
  gameObject3.velocityX = -5;
  gameObject2.velocityX = +5;
}

function draw() {
  background(0,0,0); 
 // console.log(movingRect.x-fixedRect.x) 
 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;
if( isTouching(gameObject4,movingRect))
 {
  gameObject4.shapeColor="red";
 movingRect.shapeColor="red";
 }
 else{
  gameObject4.shapeColor="green";
  movingRect.shapeColor="green";
 }

 bounceOff(gameObject2,gameObject3)

 
 
  drawSprites();
}


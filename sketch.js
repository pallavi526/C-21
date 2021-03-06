var fixedRect, movingRect, sidewaysRect, upRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  sidewaysRect = createSprite(130,125,55,120);
  sidewaysRect.shapeColor = "purple";
  sidewaysRect.debug = true;
  upRect = createSprite(200,500, 40,100);
  upRect.shapeColor = "blue";
  upRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    upRect.shapeColor = "blue";
    sidewaysRect.shapeColor = "green";
  }
 
  if(isTouching(movingRect, upRect)){
    movingRect.shapeColor = "red";
    upRect.shapeColor = "red";
  }
 
  if(isTouching(sidewaysRect, movingRect)){
    sidewaysRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  
  
  drawSprites();
}


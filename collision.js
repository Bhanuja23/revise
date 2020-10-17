var fixedRect, movingRect,edges;

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(300, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(300, 300,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  edges=createEdgeSprites();
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect)
  movingRect.bounceOff(edges);
  fixedRect.bounceOff(edges)
  drawSprites();
}
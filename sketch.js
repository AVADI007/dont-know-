var f1, b1;

function setup() {
  createCanvas(800,600);
  f1 = createSprite(100, 600, 150, 80);
  f1.shapeColor = "green";
  
  b1 = createSprite(100,100,80,30);
  b1.shapeColor = "green";
  b1.bounceOff(f1)  
   var options = {
    'restitution':1,
    'friction':0.5,
    'density':100}
  
   }



function draw() {
  background(0,10000,1000000);  
  b1.x = World.mouseX;
  b1.y = World.mouseY;

  if (b1.x - f1.x < f1.width/2 + b1.width/2
      && f1.x - b1.x < f1.width/2 + b1.width/2
      && b1.y - f1.y < f1.height/2 + b1.height/2
      && f1.y - b1.y < f1.height/2 + b1.height/2) {
    b1.shapeColor = "red";
    f1.shapeColor = "yellow";
  }
  else {
    b1.shapeColor = "green";
    f1.shapeColor = "blue";
  }
  drawSprites();
}

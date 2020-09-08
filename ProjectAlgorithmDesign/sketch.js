var fixrect, movingrect


function setup() {
  createCanvas(1200,800);
  fixrect = createSprite (600, 400, 50, 80);
  movingrect = createSprite (400, 200, 80, 30);
  
  fixrect.shapeColor = "green";
  movingrect.shapeColor =  "green";
}

function draw() {
  background(0,0,0);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  //console.log (movingrect.x - fixrect.x)
  if (movingrect.x - fixrect.x < fixrect.width/2 + movingrect.width/2
     && fixrect.x  - movingrect.x < fixrect.width/2 + movingrect.width/2
     && movingrect.y - fixrect.y < fixrect.width/2 + movingrect.width/2
     && fixrect.y  - movingrect.y < fixrect.width/2 + movingrect.width/2) {
    fixrect.shapeColor = "red";
    movingrect.shapeColor =  "red";
  }
  else {
    fixrect.shapeColor = "green";
    movingrect.shapeColor =  "green";
  }
  drawSprites();
}
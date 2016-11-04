var i=50;
var location = Vector(0,500); 

function setup() { 
  createCanvas(400, 400);
   background(17,79,96);
} 

function draw() { 
  location.x = i *cos(frameCount);
  location.y = -i* sin(frameCount);
  
	strokeWeight(0.5);
  stroke(170,219,232);
  line(500, location.x+width/5, location.y+height/5, 0);
  i+= 10;
}
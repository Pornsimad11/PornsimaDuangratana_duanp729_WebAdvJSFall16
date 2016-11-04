var position, velocity; 
var r,g,b;
var radius;

function setup() { 
  createCanvas(500, 500);
  background(0);
  position= new p5.Vector (width/2,height/2);
  velocity =new p5.Vector(5,12);
  smooth();
  radius = 100; 
} 

function draw() { 
  fill(0,10);
  rect(0,0,width,height); 
  position.add(velocity); 
  
  if (position.x>=(width-radius/2) || position. x<= radius/2) {
  velocity.x = velocity.x *-1;
  
}
if (position.y >=(height-radius/2)|| position.y<=radius/2){
  velocity.y = velocity.y * -1;
}

if( position.x>= (width-radius/2) || position.x<= radius/2){
  r=random(0,255);
  g = random (0,255); 
  b= random (0,255); 
}

if( position.y>= (width-radius/2) || position.y<= radius/2){
  r=random(0,255);
  g = random (0,255); 
  b= random (0,255); 
}

noStroke();
fill(r,g,b);
ellipse(position.x, position.y,radius,radius);
}

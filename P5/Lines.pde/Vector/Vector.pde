float i=50;
PVector location = new PVector(0, 500);

void setup() {
  size(500, 500);
  background(#114F60);
}

void draw() {

  location.x = i *cos(frameCount);
  location.y = -i* sin(frameCount);


  strokeWeight(0.5);
  stroke(#AADBE8);
  line(500, location.x+width/5, location.y+height/5, 0);
  i+= 10;
}
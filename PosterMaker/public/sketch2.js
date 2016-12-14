var app = app || {};

app.main = (function() {
	console.log('Your code starts here!');

var socket;
var randomElement;
var elements = [];

	var sketch = function(p) {
		// your global var for your p5 sketch here
p.preload = function(){
  // load image
  for (var i= 0; i<8; i++) {
  	elements[i] = p.loadImage("assets/two" + (i + 1) + ".png")
  }
  };
		// p5 setup
		p.setup = function() {
			p.createCanvas(p.windowWidth, p.windowHeight);
			p.background(255);
			// Start a socket connection to the server
			//always have p.
			socket = io.connect();
			// We make a named event called 'mouse' and write an anonymous callback function
			socket.on('mouse',
			// When we receive data
				function(data) {
				  console.log("Got: " + data.x + " " + data.y);
				  // Draw a blue circle
				  randomElement = Math.round(p.random(0, elements.length));
				  p.image(elements[randomElement],data.x,data.y);
				}
			);
		};
		p.mousePressed = function() {
			randomElement = Math.round(p.random(0, elements.length));
							  console.log(randomElement);

				  p.image(elements[randomElement],p.mouseX,p.mouseY);


			console.log("sendmouse: " + p.mouseX + " " + p.mouseY);

			// Store the mouse coordinates
			var data = {
				x: p.mouseX,
				y: p.mouseY
			};

			// And send that object to the socket
			socket.emit('mouse',data);
		};

	};

	var init = function(){
		console.log('Initializing app.');

		// If you are writing long programs that mix multiple JS libraries,
		// you might want to start your P5 sketch in an "instance mode".
		// One of the benefits is that it enables you to run multiple P5 sketch in one program.
		// Learn more: https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace
		var myp5 = new p5(sketch);

		// Optionally, you can specify a default container for the canvas and any other elements to append to with a second argument. Like this:
		// var myp5 = new p5(sketch, 'canvas-container');
	};

	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);
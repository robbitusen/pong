( function( window, undefined ){

	window.Game = function(fps){

		//Setup
		this.fps = fps;
		this.entities = [
			new Ball(),
			new Paddle(true),
			new Paddle(false)
		];

		//Bind some events m8
		this.bindEvents(this);

	};

	/* Public Methods */
	Game.prototype.run = function() {
		this.update();
		this.draw();
	};

	/* Private Methods */
	Game.prototype.bindEvents = function(self) {

		console.log("Binding events");

		window.addEventListener("keydown", function(e){
			e.preventDefault();
			for (var i = 0; i < self.entities.length; i++) {
				self.entities[i].keyDown();
			}
		});

	};

	Game.prototype.update = function(){
		for (var i = 0; i < this.entities.length; i++) {
			this.entities[i].update();
		}
	};

	Game.prototype.draw = function(){
		for (var i = 0; i < this.entities.length; i++) {
			this.entities[i].draw();
		}
	};
	
})( window );
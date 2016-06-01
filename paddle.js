( function( window, undefined ){

	window.Paddle = function(isPlayer) {

		this.isPlayer = isPlayer;
		this.x = 0;
		this.y = 0;
		this.width = 10;
		this.height = 30;

	};

	/* CONTROLS */
	Paddle.prototype.keyDown = function() {
		console.log("PRESSED");
		this.y += 0;
	};

	/* GENERIC METHODS */
	Paddle.prototype.update = function() {
		//console.log("Updating Paddle");
	};

	Paddle.prototype.draw = function() {
		//console.log("Drawing Paddle");
	};

})( window );
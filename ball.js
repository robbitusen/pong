( function( window, undefined ){

	window.Ball = function() {

		this.x = 0;
		this.y = 0;
		this.height = 15;
		this.width = 15;
		this.color = "#ff0000"; 

	};

	/* CONTROLS */
	Ball.prototype.keyDown = function() {
		this.y += 0;
	};

	/* GENERIC METHODS */
	Ball.prototype.update = function() {
		//console.log("Updating Ball");
	};

	Ball.prototype.draw = function() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	};

})( window );
( function( window, ctx, undefined ){

	window.Paddle = function() {

		/*
			Setup options args
		*/
		var defaults = {
			startX: 0,
			startY: 0,
			isPlayer: true,
			height: 10,
			width: 10,
			color: "#ffffff"
		}

		if ( arguments[0] && typeof arguments[0] === "object" ) {
			console.log("There were arguments");
			this.options = extendDefaults( defaults, arguments[0] );
		}

		/*
			Assign properties with args
		*/
		this.x = this.options.startX;
		this.y = this.options.startY;

	};

	function extendDefaults( source, properties ) {

		var property; //hold current property name

		for (property in properties) {

			//if the properties list has the property currently being iterated over
			if ( properties.hasOwnProperty(property) ) {
				source[property] = properties[property] //assign the original defaults var the current value of the properties property, thus making customiseable 
			}
		}

		return source; //return newly updated source object 
	}

	/* CONTROLS */
	Paddle.prototype.mouseMove = function(event) {

		//Apply controls only if human player
		if ( this.options.isPlayer == true ) {
			this.y = event.clientY;
		}
		
	};

	/* GENERIC METHODS */
	Paddle.prototype.update = function() {
		//console.log("Updating Paddle");
	};

	Paddle.prototype.draw = function() {
		ctx.fillStyle = this.options.color;
		ctx.fillRect(this.x, this.y, this.options.width, this.options.height);
	};

})( window, ctx );
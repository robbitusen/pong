( function( window, ctx, undefined ){

	window.Ball = function() {

		/*
			Setup options args
		*/
		var defaults = {
			startX: (( window.innerWidth / 2) - 5 ),
			startY: (( window.innerHeight / 2 ) - 5 ),
			height: 10,
			width: 10,
			color: "#ffffff"
		}

		if ( arguments[0] && typeof arguments[0] === "object" ) {
			this.options = extendDefaults( defaults, arguments[0] );
		}

		/*
			Assign properties with args
		*/
		this.x = this.options.startX;
		this.y = this.options.startY;

	};

	/* 
		Private Methods 
	*/
	function extendDefaults( source, properties ) {

		var property;

		for (property in properties) {
			if ( properties.hasOwnProperty(property) ){
				source[property] = properties[property];
			}
		}

		return source;

	}

	/* 
		Public Methods 
	*/
	Ball.prototype.mouseMove = function(event) {
		//this.y = event.clientY;
	};

	Ball.prototype.update = function() {
		
	};

	Ball.prototype.draw = function() {
		ctx.fillStyle = this.options.color;
		ctx.fillRect(this.x, this.y, this.options.width, this.options.height);
	};

})( window, ctx );
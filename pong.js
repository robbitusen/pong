( function( window, ctx, undefined ){

	window.Game = function(fps){

		/*
			Setup
		*/
		this.fps = fps;			//Frames per second
		this.entities = [ 		//List of game objects
			new Ball({
				height: 10,
				width: 10,
				color: "#ffffff"
			}),
			new Paddle({
				isPlayer: false,
				startX: (window.innerWidth - 15),
				height: 40,
				width: 15,
				color: "#ffffff"
			}),
			new Paddle({
				isPlayer: true,
				height: 25,
				width: 10,
				color: "#ffffff"
			})
		];
		this.bindEvents(this); 	//Game controls init

	};

	/* 
		Public Methods 
	*/
	Game.prototype.run = function() {
		this.update();
		this.draw();
	};

	Game.prototype.bindEvents = function(self) {

		console.log("Binding events");

		window.addEventListener("mousemove", function(e){
			//console.log(e);
			for (var i = 0; i < self.entities.length; i++) {
				self.entities[i].mouseMove(e);
			}
		});

	};

	Game.prototype.update = function(){
		for (var i = 0; i < this.entities.length; i++) {
			this.entities[i].update();
		}
	};

	Game.prototype.draw = function(){

		//Blit screen
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		//Draw objects
		for (var i = 0; i < this.entities.length; i++) {
			this.entities[i].draw();
		}

	};
	
})( window, ctx );
var app = new Vue({
	el : "#app",
	data : {
		widthMe : 100,
		widthMonter : 100,
		gameIsRunning : false,
		ketQua : []
	},
	methods : {
		newGame : function(){
			this.widthMe = 100,
			this.widthMonter = 100,
			this.gameIsRunning = true

		},
		attack  : function(){
			var max = 10 ;
			var min = 1;
			var damageOfMe = this.calculatorDamage(max, min);
			this.widthMonter -= damageOfMe;
			max = 15; 
			min = 5;
			var damageOfMonter = this.calculatorDamage(max, min)
			this.widthMe -= damageOfMonter;
			this.printKetQua( damageOfMe, damageOfMonter );
			this.checkWin(this.widthMonter, this.widthMe);	


		},
		calculatorDamage : function(max, min){
			return Math.floor(Math.random() * (max - min))  + min;
		},
		heal : function(){
			this.widthMe += 10;
			this.widthMe -= this.calculatorDamage(15, 5);

		},

		checkWin : function(widthMonter, widthMe){
			if(widthMe <= 0 ){
				alert("You lose");
				this.newGame();
				this.gameIsRunning = false;
				this.ketQua = [];
			}
			else if(widthMonter <= 0 ){
				alert("You win");
				this.newGame();
				this.gameIsRunning = false;
				this.ketQua = [];
			}
		},
		printKetQua : function(attackOfMe , attackOfMonter){
			this.ketQua.push({ me : attackOfMe , monter : attackOfMonter });

		}	

	}


});
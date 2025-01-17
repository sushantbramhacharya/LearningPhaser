// Define "gameState" here
const gameState={}

function create() {
  // Create a circle and assign it to gameState.circle here
  gameState.circle=this.add.circle(40,40,10,0xFF5733);
  
}

function update() {
  // Update the circle in gameState.circle here
  gameState.circle.y+=1
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#99ff99",
	scene: {
    create,
    update
	}
}

const game = new Phaser.Game(config)

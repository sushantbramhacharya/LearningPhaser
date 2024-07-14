// Create a create() function here:

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#a0a0dd",
  scene:{
    create
  }
  // Add in the scene information in the config here:

}
const create=()=>{
  this.add.text(100,100,"Hello from create")
}
const game = new Phaser.Game(config)

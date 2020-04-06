
    class Scene3 extends Phaser.Scene {

        constructor() {
          super('Scene3');
        }
    preload() {
    this.load.image('title2', './assets/title.png');
    this.load.audio('click', './music/click.mp3')
	}
	create() {
        var destroy = this.scene.get('Scene1')
        var title2 = this.add.image(400,200,'title2');
        var restarttext = this.add.text(300,500, 'restart the game!');
        clicksound = this.sound.add('click')
        restarttext.setInteractive({ useHandCursor: true });
        restarttext.on('pointerdown',  function () {
            this.scene.switch('Scene2');
            clicksound.play()
          }, this);
          scoreName = this.add.text(300, 425, " ");
          scoretext = this.add.text(300, 400, " ")
          currentHighscore = this.add.text(300, 450, " ")

        }
        
  update(){
    racemusic.pause()
      scoreName.setText("Highscore Name: " + name)
      scoretext.setText("Your Score: " + score + " secs")
      currentHighscore.setText( "current highscore: " + LS_SCORE)
      // console.log("highscore name: ", name,  "/n your score", score)
    }
}

// export default TitleScene;

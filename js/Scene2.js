
    class Scene2 extends Phaser.Scene {

        constructor() {
          super('Scene2');
        }
  preload() {
    this.load.image('title', './assets/title2.png');
    this.load.image('background', './assets/background.png')
    this.load.audio('racemusic', './music/race.mp3')
    this.load.audio('click', './music/click.mp3')
	}
	create() {

        var background = this.add.image(400,200, 'background').setScale(1)
        var title = this.add.image(400,300,'title');
        var rallyrules = this.add.text(180, 450, 'Get to the end first before the other driver does!')
        var instructions = this.add.text(50, 500, 'Player 1 controls WASD')
        var instructions2 = this.add.text(500, 500, 'Player 2 controls Arrowkeys')
        var text = this.add.text(285,550, 'Click Here to Start!');

      //adds music and soundeffects
        racemusic = this.sound.add('racemusic')
        clicksound = this.sound.add('click')
      //makes click here text clickable and then starts the game.
        text.setInteractive({ useHandCursor: true });
        text.on('pointerdown',  function () {
            this.scene.start('Scene1');
            clicksound.play({
              volume: .7,
            })
            racemusic.play({
              volume: .5,
              loop: true
            })
          }, this);
        console.log(score)
        }
       
      //pauses the music from the last game and resets the timernum and score.
  update(){
      racemusic.pause()
          timernum = 0;
          score = 0;
    }
}

// export default TitleScene;

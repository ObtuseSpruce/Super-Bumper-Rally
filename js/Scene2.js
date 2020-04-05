
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
        racemusic = this.sound.add('racemusic')
        clicksound = this.sound.add('click')
        var text = this.add.text(300,500, 'Click Here to Start!');
        text.setInteractive({ useHandCursor: true });
        text.on('pointerdown',  function () {
            this.scene.switch('Scene1');
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
       
    update(){
          timernum = 0;
          score = 0;
    }
}

// export default TitleScene;

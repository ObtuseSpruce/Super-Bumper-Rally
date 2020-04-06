class Scene1 extends Phaser.Scene {

    constructor() {
      super('Scene1');
    }


preload() {
        this.load.image('player1', "./assets/car.png")
        this.load.image('player2', './assets/car2.png')
        this.load.tilemapTiledJSON('racetrack', './assets/racetrack6.json');
        this.load.image('mapTiles', './assets/spritesheet_tiles.png')
        this.load.image('finish', './assets/finishline.png')
        this.load.image('smoke', './assets/smoke2.png')
        this.load.image('beachball', './assets/beachball2.png')
        this.load.audio('vroom', './music/vroom.mp3')
        this.load.audio('vroom2', './music/vroom2.mp3')
    }

create() {

        timerInt = this.time.addEvent({ delay: 1, callback: onEvent, callbackScope: this, loop: true });
    //add cameras to the game and sets their boundries.
        var camera = this.cameras.main.setViewport(0,0, 399, 600)
        camera.setBounds(0, 0, 6784, 4960);
        var camera2 = this.cameras.add(400, 0, 399, 600)
        camera2.setBounds(0, 0, 6784, 4960);

    //limits where the players can go
        this.physics.world.setBounds(0, 0, 6784, 4960);
    // adds car sounds
        vroom = this.sound.add('vroom')
        vroom2 =this.sound.add('vroom2')
        

    //generates player movement key event listners
        cursors = this.input.keyboard.createCursorKeys();

     //player 2 controls declared here
        up2 = this.input.keyboard.addKey('W');
        left2 = this.input.keyboard.addKey('A');
        right2 = this.input.keyboard.addKey('D');
       
        
    //creates the racetrack map with the tileset and json map file
        racetrack = this.make.tilemap({ key: 'racetrack'})
        var tileSet = racetrack.addTilesetImage('spritesheet_tiles', 'mapTiles')
        var layer = racetrack.createStaticLayer('grass', tileSet, 0, 0)
        var layer2 = racetrack.createStaticLayer('barriers', tileSet, 0 ,0)

    // adds the entities finishline and beachballs
        finishline = this.physics.add.image(5700, 800, 'finish')
        beachball = this.physics.add.image(4800, 2600, 'beachball').setScale(.3)
        beachball2 = this.physics.add.image(4800, 3300, 'beachball').setScale(.3)

    //emitters and particles are declared here
        var particles = this.add.particles('smoke');
        emitter = particles.createEmitter({
            // speed: 50,
            x: { min: -20, max: 20 },
            y: { min: -20, max: 20 },
            speed: { min: 0, max: 50 },
            angle: 180,
            scale: { start: 1, end: 0 },
            frequency: 50,
            blendMode: 'ADD'
        });
        var emitter2 = particles.createEmitter({
            speed: 1,
            // speed: { min: 0, max: 50 },
            angle: 180,
            scale: { start: 1, end: 0 },
            quantity: 1,
            frequency: 75,
            blendMode: 'ADD'
        });

        emitter3 = particles.createEmitter({
            // speed: 50,
            x: { min: -20, max: 20 },
            y: { min: -20, max: 20 },
            speed: { min: 0, max: 50 },
            angle: 180,
            scale: { start: 1, end: 0 },
            frequency: 50,
            blendMode: 'ADD'
        });
        var emitter4 = particles.createEmitter({
            speed: 1,
            // speed: { min: 0, max: 50 },
            angle: 180,
            scale: { start: 1, end: 0 },
            quantity: 1,
            frequency: 75,
            blendMode: 'ADD'
        });
        
    //generates player at the starting location
        player = this.physics.add.image(200, 400, 'player1').setScale(1);
        player2 = this.physics.add.image(200, 475, 'player2').setScale(1);

    //emitters are set to follow the players
        emitter.startFollow(player);
        emitter2.startFollow(player);
        emitter3.startFollow(player2)
        emitter4.startFollow(player2)

    //keeps player within the bounds of the world and adds other parameters
        player.setCollideWorldBounds(true);
        player.setDamping(true);
        player.setDrag(.99);
        player.setMaxVelocity(900);
        player.setBounce(.5)
    // player 2 parameters
        player2.setCollideWorldBounds(true);
        player2.setDamping(true);
        player2.setDrag(.99);
        player2.setMaxVelocity(900);
        player2.setBounce(.5)
    // beachball parameters
        beachball.setBounce(1)
        beachball2.setBounce(1)
        beachball.setVelocity(500)
        beachball2.setVelocity(500)



 
    //adds layer collision for each of the sprites
        layer2.setCollisionByProperty({ bump: true })
        layer2.setCollision([1497, 1498, 1499, 1500, 2297, 2298, 2299, 2300, 2225, 2226, 2227, 2228, 1497, 1498, 1499, 1500,
            1497, 1498, 1499, 1500, 1217, 644, 1289, 716, 1361, 788, 1433, 1777, 1852, 1849, 1780, 1924, 1924, 1924, 1924,
             860, 1997, 1998, 1999, 2000, 1993, 1924, 2225, 2226, 2227, 2228, 629, 630, 701, 702, 347, 348, 420, 703, 920, 132, 773, 204, 921, 59, 60,
            1445, 1448, 1520, 1517, 1592, 1589, 1661, 1664, 2650, 2721, 2722, 2649, 275, 276])

    //creates colliders for each object in the game
        this.physics.add.collider(player, layer2)
        this.physics.add.collider(player2, layer2)
        this.physics.add.collider(player, player2)
        this.physics.add.collider(player, beachball)
        this.physics.add.collider(player, beachball2)
        this.physics.add.collider(player2, beachball)
        this.physics.add.collider(player2, beachball2)
        this.physics.add.collider(layer2, beachball)
        this.physics.add.collider(layer2, beachball2)
        this.physics.add.collider(beachball, beachball2)


    //set cameras to follow the players
        camera2.startFollow(player, true, 0.8, 0.8)
        camera.startFollow(player2, true, 0.8, 0.8)

    //win condition set to onOverlap
        player.body.onOverlap = true;
        player2.body.onOverlap = true;


    //win the game if you hit the finishline
        this.physics.world.on('overlap', function () {
            player.destroy()
            player2.destroy()
            player = this.physics.add.image(200, 400, 'player1').setScale(1);
            player2 = this.physics.add.image(200, 475, 'player2').setScale(1);
            this.scene.switch('Scene3');
            scoreUpdate()
          }, this);
        this.physics.add.overlap(player, finishline)
        this.physics.add.overlap(player2, finishline)

    //adds timer to the camera
        t = this.add.text(150, 25, { font: "32px Arial", fill: "#ffffff", align: "center" });
        t.setScrollFactor(0);

    }
    
 update () {

    //pauses one of the emitters so they only turn on when player holds key down.
        emitter3.pause()
        emitter.pause()

    //sets and updates the timer attached to the camera
        t.setText('time elapsed ' + (Math.floor((timernum * .02) * 100) / 100));


    //player 1 movement
        if (cursors.up.isDown)
    {
        this.physics.velocityFromRotation(player.rotation, 600, player.body.acceleration);
        vroom.play({
            volume: .2,
            delay: .01,
        })
    }
    else
    {
        player.setAcceleration(0);
    }

    if (cursors.left.isDown)
    {
        player.setAngularVelocity(-100);
        emitter.resume()
    }
    else if (cursors.right.isDown)
    {
        player.setAngularVelocity(100);
        emitter.resume()
    }
    else
    {
        player.setAngularVelocity(0);
    }

    //player 2 movement
    
    if (up2.isDown)
    {
        this.physics.velocityFromRotation(player2.rotation, 600, player2.body.acceleration);
        vroom.play({
            volume: .2,
            delay: .01,
        })
    }
    else
    {
        player2.setAcceleration(0);
    }

    if (left2.isDown)
    {
        player2.setAngularVelocity(-100);
        emitter3.resume()

    }
    else if (right2.isDown)
    {
        player2.setAngularVelocity(100);
        emitter3.resume()
    }
    else
    {
        player2.setAngularVelocity(0);
    }


 }
}
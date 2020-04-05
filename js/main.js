let config = {
    width: 800,
    height: 600,
    // backgroundColor: 0xabcdef,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [Scene2, Scene1, Scene3]
    // {
    //     preload: preload,
    //     create: create,
    //     update: update
    // }
};
var beachball;
var beachball2;
var player;
var player2;
var wall;
var racetrack;
var finishline;
var timerInt;
var cursors;
var cursors2;
var left2;
var right2;
var up2;
var down2;
var timernum = 0;
var score;
var t;
var scoreName;
var scoretext;
var LS_NAMES;
var LS_SCORE = 0;
var name;
var currentHighscore;
var emitter;
var racemusic;
var clicksound;
var vroom;
var vroom2
var emitter3

function compare () {
    if (LS_SCORE === 0 || score <= LS_SCORE ) {
        name = prompt('what is your name!')
        localStorage.setItem('key', JSON.stringify(score));
        LS_SCORE = JSON.parse(localStorage.getItem('key'));
    }
}
function scoreUpdate () {
    score = (Math.floor((timernum * .02) * 100) / 100)
    compare();
}

function setHighscore () {
    localStorage.setItem('key', JSON.stringify(score));
    LS_SCORE = JSON.parse(localStorage.getItem('key'));
    console.log("localstorage: ", LS_SCORE);
}

function onEvent () {
    timernum++
    // console.log(score)
}

let game = new Phaser.Game(config);
// game.scene.add('titleScene')
// game.scene.start('titleScene')



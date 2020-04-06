let config = {
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [Scene2, Scene1, Scene3]
};

//objects in the game
var beachball;
var beachball2;
var player;
var player2;
var racetrack;
var finishline;
//timer related variables
var timerInt;
var timernum = 0;
//player 1 keyboard inputs
var cursors;
//player2 keyboard inputs
var left2;
var right2;
var up2;
var down2;
//score keeping variables
var score;
var t;
var scoreName;
var scoretext;
var name;
var LS_NAMES;
var LS_SCORE = 0;
var currentHighscore;
//music variables
var racemusic;
var clicksound;
var vroom;
var vroom2
//special effect variables
var emitter;
var emitter3

//highscore related functions
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

//timer for the game
function onEvent () {
    timernum++
}

//main game
let game = new Phaser.Game(config);




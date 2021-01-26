var gameState = 0;
var playerCount = 0;
var form;
var game, player;
var database;
var allPlayers;
var car1,car2,car3,car4,cars;
var car1Image,car2Image,car3Image,car4Image;
var trackImage;
var groundImage;
var carsAtEnd=0;
var winner

function preload () {
 car1Image=loadImage("car1.png")
 car2Image=loadImage("car2.png")
 car3Image=loadImage("car3.png")
 car4Image=loadImage("car4.png")
 trackImage=loadImage("track.jpg")
 groundImage=loadImage("ground.png")
}

function setup() {
createCanvas(displayWidth-20,displayHeight-20);
database = firebase.database();
game = new Game()
game.getState()
game.start()
}

function draw () {
if(playerCount===4&&carsAtEnd===0) {
    game.update(1)
}
if(gameState===1) {
    clear()
    game.display();
    game.play();
   
    
}
if(gameState===2) {
    game.display()
    game.end()
}

}




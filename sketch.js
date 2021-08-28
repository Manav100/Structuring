var  database,backgroundImage
var gameState = 0
var playerCount
var form,player,game
var canvas

function setup(){
  database = firebase.database();
  console.log(database);
   canvas = createCanvas(500,500);
  game = new Game()
  game.getState()
  game.start()

 }

function draw(){
  background("white");
  
   
}


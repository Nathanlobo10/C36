var database;
var gameState = 0
var playerCount = 0
//creating objects for the classes
var form,player,game


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  //creating object for Game class
  game = new Game()
  game.readState()
  game.start()

 
}

function draw(){
 
  
   

  
}



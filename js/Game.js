class Game{
    constructor(){

    }
readState(){
    //ypu are referring the path from the firebase database
var gameStateref = database.ref('gameState')  
//setting the listener even who will be calling function with argument data
gameStateref.on("value",function(data){
    //reading the gamestate from the database
   gameState = data.val();
})
}   


//trying to send the new game state value to the database and changing the database's gamestate value
update(state){
database.ref ('/').update({
    //changing the value in the database
    gameState : state
})
}

start(){
  if(gameState===0){
  player = new Player()
  player.getCount()
  form = new Form()
  form.display()
  }  
}


}
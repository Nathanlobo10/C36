class Player{
 constructor(){    
 }  
 //get the playerCount data from the database and it will give it your game
 getCount(){
     //you are referring this path of the database to get playerCount info
var playerCountref = database.ref('playerCount')
//setting the on listener ever who will keep track of the function
playerCountref.on("value",function(data){
    //getting the value from the datbase and storing to the application playercount
    playerCount = data.val()
})
 }

 //you are going to the database and updating the playerCount
 updateCount(count){
 database.ref ('/').update({
  playerCount : count   
 })   

 }

update(name){
var playerindex = "player"+playerCount
database.ref(playerindex).set({
  name :name  
})
}


}
class Form{
 constructor() {   
 } 
display(){
    //the main heading of the form
 var title = createElement('h2')   
 //what text you want in the title
 title.html("Multiplayer Car Racing Game")
 //the position where you want the title
 title.position(130,10)

 //input box where player will update their name
 var input = createInput("Enter Your Player Name")
 //button to click 
 var button = createButton('Start')

 input.position(130,160)
 button.position(250,200) 

 //when you click the button the mousePressed even gets called and it calls a function 
 button.mousePressed(function(){
       input.hide()
       button.hide();
       //gets you the value from the input box which is baically the name of the player
var name = input.value();
playerCount = playerCount+1
player.update(name)
player.updateCount(playerCount)
var greeting = createElement('h3')
greeting.html("welcome "+name)
greeting.position(130,160)





 })
}
}
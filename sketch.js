//Create variables here
var database
var position
var dog
var happydog
var foodStock
var foodS

function preload()
LoadImage("image/Dog.png")
LoadImage("image/happydog.png")


{
//load images here
}

function setup() {
	createCanvas(500,500);
  database=firebase.database()
  var positionRef = database.ref('dog/position')
    positionRef.on("value",readPosition)
  
  
}


function draw() { 
  background(87);
  dog.show()
  happydog.show()
  
  if(position!==undefined){
  }
   
    
    }
     if(keyWentDown(UP_ARROW)){
        writeStock(foodS)
        dog.addImage(Happydog)
    }
     
    {
  drawSprites();
  //add styles here

}
function changePosition(x,y){
  database.ref('dog/position').update({
      'x':dog.x+x,
      'y':dog.y+y

}
function readStock(data){
  foodS=data.val();
  dog.x=position.x
  dog.y=position.y
}
function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  }
  database.ref('/').update({
    
  })
}




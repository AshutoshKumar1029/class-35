//Create variables here
var dog, happyDog, database, foodS, foodStock;
var mainDog
function preload()
{
	dog = loadImage("images/Dog.png")
  happyDog = loadImage("images/happydog.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  mainDog = createSprite(250,250,50,50);
  mainDog.addImage(dog)
  mainDog.scale=0.2
  foodStock=database.ref('food')
  foodStock.on("value",readStock);
}


function draw() {  
background("green")
  drawSprites();
  //add styles here
textSize(20)
fill("white")
text(foodS,250,100);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
}



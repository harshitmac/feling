var gamestate ,nun, first , second;
var responseModeNormal , responseModeActive;
var response = responseModeNormal;
var irritation = 10;



function setup() {

  canvas = createCanvas(displayWidth - 30, displayHeight-125);
  

  alan = createSprite(500,500,50,50);
  user = createSprite(500,200,50,50);
  user.visible = false;

  content = createSprite(400 ,400 , 50,50)
  content.visible = false;
  content.shapeColor = "white";

  content1 = createSprite(500 ,500 , 50,50)
  content1.visible = false;
  content1.shapeColor = "blue";

  content2 = createSprite(500 ,500 , 50,50)
  content2.visible = false;
  content2.shapeColor = "red";


}

function draw() {
  background("black");  
  
  
  if (keyCode === 49){
    gamestate = 1;
    response = responseModeActive;
    console.log(gamestate);
  }

  if (keyCode === 50){
    gamestate = 2;
    response = responseModeActive;
    user.visible = true;
    console.log(gamestate);
  }

  if(gamestate === 2){
    
    alan.x = user.x;
    irritation = irritation + 2;
  }
console.log(irritation);

 

  if(irritation > 1000){
    alan.y = 500;
    gamestate = nun;
    irritation = 10;
  }



  if(gamestate === nun){
    user.visible = false;
  }

  if (keyCode === 32){
    gamestate = nun;
    response = responseModeNormal;
    
  }
  console.log(gamestate);
  if(gamestate === 3){
    content2.visible = true;
    content1.visible = true;
    content.visible = true;


  }

  
  if(keyCode === 51){
    gamestate === 3;
    user.visible = true;
    
  }

  
 // console.log(alan.y);
  //console.log(alan.x);

  if(gamestate === 1 && response === responseModeActive ){
        moveFast();
  }

  if (gamestate === nun){
    move();
  }

  moveForUser();
  move();
  drawSprites();
}

function move(){
  if(keyDown(UP_ARROW)){
    alan.y = alan.y - 20; 
  }
  
  if(keyDown(DOWN_ARROW)){
    alan.y = alan.y + 20; 
  }
  
  if(keyDown(LEFT_ARROW)){
    alan.x = alan.x - 20; 
  }
  
  if(keyDown(RIGHT_ARROW)){
    alan.x = alan.x + 20; 
  }
  
}

function moveFast(){
  if(keyDown(UP_ARROW)){
    alan.y = alan.y - 50; 
  }
  
  if(keyDown(DOWN_ARROW)){
    alan.y = alan.y + 50; 
  }
  
  if(keyDown(LEFT_ARROW)){
    alan.x = alan.x - 50; 
  }
  
  if(keyDown(RIGHT_ARROW)){
    alan.x = alan.x + 50; 
  }
  
}

function moveForUser(){
  if(keyCode === 65){
    user.x = user.x - 20; 
  }
  
  if(keyCode === 68){
    user.x = user.x + 20; 
  }
}

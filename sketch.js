//declaring the variables for the game
var bullet,wall;
var speed,weight,thickness;

function setup() {
  //creating the game area
  createCanvas(1600,400);

  //declaring the random speed and weight of the bullet
  speed = random(223,321);
  weight = random(30,52);

  //creating the bullet
  bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  //creating the random thickness of the wall
  thickness = random(23,83)
  
  //creating the wall
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);

}

function draw() {
  //adding the background
  background(0,0,0);  

  //changing the color of the wall according to its strength against the bullet
 if(hasCollided(bullet,wall)){
    
  //making the bullet come to rest
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }

  if (damage < 10){
    wall.shapeColor = color(0,255,0);
  }
 }

 //displaying all the variables
  drawSprites();
}

//creating a function for the collision of the bullet
function hasCollided(lBullet,lwall){
  
bulletRightEdge = lBullet.x + lBullet.width;
wallleftEdge = lwall.x;

if(bulletRightEdge >= wallleftEdge){
  return true;
}else{
  return false;
}

}

//Thank you
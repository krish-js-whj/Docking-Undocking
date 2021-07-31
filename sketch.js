var iss, spaceCraft, bg, issImg, spacecraftImg;
var hasDocked=false;

function preload(){
  bg=loadImage("Docking-undocking/spacebg.jpg");
  issImg=loadImage("Docking-undocking/iss.png");
  spaceCraftImg1=loadImage("Docking-undocking/spacecraft1.png");
  spaceCraftImg2=loadImage("Docking-undocking/spacecraft2.png");
  spaceCraftImg3=loadImage("Docking-undocking/spacecraft3.png");
  spaceCraftImg4=loadImage("Docking-undocking/spacecraft4.png");
}
function setup() {
  createCanvas(600,350);
  
  spaceCraft=createSprite(285, 240);
  spaceCraft.addImage(spaceCraftImg1);
  spaceCraft.scale=0.15;

  iss=createSprite(330,120);
  iss.addImage(issImg);
  //iss.scale=0.25


}

function draw() {
  background(bg);  

  spaceCraft.addImage(spaceCraftImg1);

  if (!hasDocked){
    spaceCraft.x=spaceCraft.x+random(-1,1)
  
  if (keyDown("UP_ARROW")){
    spaceCraft.y-=2
  }
  if (keyDown("LEFT_ARROW")){
    spaceCraft.x-=1;
    spaceCraft.addImage(spaceCraftImg4);
  }
  if (keyDown("DOWN_ARROW")){
    spaceCraft.y+=2;
    spaceCraft.addImage(spaceCraftImg2);
  }
  if (keyDown("RIGHT_ARROW")){
    spaceCraft.x+=1;
    spaceCraft.addImage(spaceCraftImg3);
  }
}
  if (spaceCraft.y<=(iss.y+68) && spaceCraft.x<=(iss.x-12)){
    hasDocked=true;
    textSize(25);
    fill("white");
    text("Docking Successful", 200,300);

  }

  drawSprites();
 

}
var sword1Img,sword1
var gameoverImg, gameOver;
var bkImg,bk;
var runner,runnerImg;
var swordGroup;
function preload(){
sword1Img = loadImage("sword1.png");
gameoverImg = loadImage("textGameOver.png");
bkImg = loadImage("Road.png");
runnerImg = loadAnimation("Runner.png","Runner-1.png");

}

function setup() {
 createCanvas(650,550);
 bk = createSprite(325,147);
 bk.addImage(bkImg);
bk.velocityY = +3
 runner = createSprite(325,500);
 runner.addAnimation("Runner",runnerImg);
 runner.scale = 0.08;
sword1 = createSprite(200,200)
sword1.addImage(sword1Img);
sword1.scale = 0.3;
sword1.velocityY=+2
gameOver = createSprite(400,200)
gameOver.addImage(gameoverImg);
gameOver.visible = false;
swordGroup = new Group()
}

function draw() {
 background("black");
if(keyDown("left")){
   runner.x-=3;
}
if(keyDown("right")){
runner.x+=3
}
if(bk.y>500){
bk.y=300;
}
sword1.y=Math.round(random(200,450));
swordGroup.add(sword1)
if(swordGroup.isTouching(runner)){
//text("gameover",325,275);
gameOver.visible = true
}
 drawSprites();
}

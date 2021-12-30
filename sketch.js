var punch,stand,punch2,stand2,block,block2,blocking1, blocking2, bg;
var player,player2,ground, health, health1, alive1, alive2;

function preload(){
   stand = loadAnimation("Imgs/1.png","Imgs/2.png","Imgs/3.png","Imgs/4.png")
   punch = loadAnimation("Imgs/11.png","Imgs/12.png","Imgs/13.png","Imgs/14.png","Imgs/15.png","Imgs/16.png","Imgs/17.png","Imgs/18.png","Imgs/19.png","Imgs/20.png",
   "Imgs/21.png","Imgs/22.png","Imgs/23.png","Imgs/24.png","Imgs/25.png")
   punch2 = loadAnimation("Imgs2/11.png","Imgs2/12.png","Imgs2/13.png","Imgs2/14.png",
   "Imgs2/21.png","Imgs2/23.png","Imgs2/24.png","Imgs2/25.png")
   stand2 = loadAnimation("Imgs2/1.png","Imgs2/2.png","Imgs2/3.png","Imgs2/4.png")
   block = loadAnimation("Imgs/13.png")
   block2 = loadAnimation("Imgs2/13.png")
   bg = loadImage("Imgs2/boxed.jpg")
}


function setup(){
    createCanvas(windowWidth, windowHeight)
    health = 100
    health1 = 100
    alive1 = true;
    alive2 = true;
    player = createSprite(150,height-20, 50, 50)
    player2 = createSprite(width - 100,height-30, 50, 50)
    player.addAnimation("standing", stand);
    player.addAnimation("punch", punch);
    player.addAnimation("block", block);
    player2.addAnimation("standing2", stand2);
    player2.addAnimation("punch2", punch2);
    player2.addAnimation("block2", block2);
    player.scale = 0.5;
    player2.scale = 0.5;
    player.setCollider("rectangle", 0, 0, 300,300);
    player2.setCollider("rectangle", 0, 0, 300,300);

    ground = createSprite(width/2, height - 15, width, 15)
    
}


function draw(){
    player.debug = true
    player2.debug = true
    background(bg);
    ground.visible = false;
    fill("white")
    textSize(25)
    text("Health: "+health, 100, 50)
    text("Health: "+health1, 750, 50)



    if(keyWentDown('e')&&player.isTouching(player2)&&blocking2 == false&& health1 >0){
        
        player.changeAnimation("punch", punch);

        health1 -= 5
    }
    if(keyWentDown('e')){
        
        player.changeAnimation("punch", punch);
    }
    if(keyWentUp('e')){
        
        player.changeAnimation("standing", stand);
    }
    if(keyWentDown('m')&&player2.isTouching(player)&&blocking1 == false&& health >0){
        
        player2.changeAnimation("punch", punch2);
        health -= 5
    }
    if(keyWentDown('m')){
        player2.changeAnimation("punch2", punch2)
    }
    
    if(keyWentUp('m')){
        
        player2.changeAnimation("standing2", stand2)

    }

    if(keyWentDown('f')){
        player.changeAnimation("block", block)
        blocking1 = true
    }
    if(keyWentUp('f')){
        player.changeAnimation("standing", stand)
        blocking1 = false
    }
    if(keyWentDown('n')){
        player2.changeAnimation("block2", block2)
        blocking2 = true
    }
    if(keyWentUp('n')){
        player2.changeAnimation("standing2", stand2)
        blocking2 = false
    }

    
    if(keyDown('d')){
        //console.log("this works")
        player.x += 5;
    }
    if(keyDown('a')){
        //console.log("this works")
        player.x += -5;
    }   
    if(keyDown('w') && player.y >= 480){
        //console.log("this works")
        player.velocityY = -10;
    }
        
    if(keyDown('right')){
        //console.log("this works")
        player2.x += 5;
    }
    if(keyDown('left')){
        //console.log("this works")
        player2.x += -5;
    }   
    if(keyDown('up') && player2.y >= 470)
    {
        //console.log("this works")
        player2.velocityY = -10;
    }
    player.velocityY += 0.8;
    player2.velocityY += 0.8;

    player.collide(ground);
    player2.collide(ground);
    //console.log(player.y);


    if(health1 == 0){
        text("Good Job!, You won!", 400, 400)
    }

    if(health == 0){
        text("You lost, Reload this page to retry!", 400, 400)
    }

    drawSprites();

}



class Game{
constructor(){


}
getState() {
    var gameStateRef=database.ref('gameState')
    gameStateRef.on('value',function(data){
        gameState=data.val()
    })
}
update(state) {
database.ref('/').update({
    gameState:state
}) 


}
async start() {
    if(gameState===0) {
        player = new Player();
        var playerCountRef=await database.ref('playerCount').once("value")
        if(playerCountRef.exists()) {
            playerCount=playerCountRef.val()
            player.getCount()
        }
        
        form = new Form();
        form.display()
    }
    car1=createSprite(100,200)
    car1.addImage(car1Image);
    car2=createSprite(300,200)
    car2.addImage(car2Image);
    car3=createSprite(500,200)
    car3.addImage(car3Image);
    car4=createSprite(700,200)
    car4.addImage(car4Image);
    cars=[car1,car2,car3,car4]

}
display(){
    form.hide()
    text("game start",100,100)
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    if(allPlayers!==undefined) {
        background(groundImage)
        image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
    
    var position=130
    var index=0
    var x=220
    var y=50
    for(var plr in allPlayers) {
        index=index+1
        x=x+200
        y=displayHeight-allPlayers[plr].distance
        cars[index-1].x=x
        cars[index-1].y=y
        if(plr==="player"+player.index) {
            fill("red")
            cars[index-1].shapeColor="red"
            ellipse(x,y,60,60)
            camera.position.x=displayWidth/2
            camera.position.y=cars[index-1].y
        }
        else{
            fill("black")
            //cars[index-1].shapeColor="black"
        }
        position+=20
        //text(allPlayers[plr].name,cars[index-1].x,cars[index-1].y+70)
        push()
        textAlign(CENTER)
        text(allPlayers[plr].name,cars[index-1].x,cars[index-1].y+70)
        pop()
    }
    if(allPlayers[plr].rank!==0) {
        push()
        text(allPlayers[plr].name,cars[index-1].x,cars[index-1].y+70)
        pop()
        if(allPlayers[plr].rank===1&&gameState===2) {
            push()
            console.log(allPlayers [plr].name)
            winner=allPlayers [plr].name
            //console.log("winner"+winner)
            stroke(13,13,13)
            strokeWeight(4)
            fill("yellow")
            textSize(20)
            text("WINNER",cars[index-1].x+40,cars[index-1].y+50)
            pop();
        }
    }
    
}
        drawSprites()
}
play() {
    if(keyDown(UP_ARROW)&& player.ended===false&&player.distance<5150) {
        player.distance=player.distance+20
        player.update();
    
    }
    if(player.distance>5150&&player.ended===false) {
        carsAtEnd=carsAtEnd+1
        //console.log("yeet")
        player.updateRank(carsAtEnd)
        Player.updateCarsAtEnd(carsAtEnd)
        player.ended=true
    }
    if(carsAtEnd===4) {
        game.update(2)
    }
}





end() {
    
//console.log("playerWins" + winner)
//clear();
//text("YOU WON!!!",100,100)


}
}
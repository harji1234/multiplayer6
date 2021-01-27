class Form{
    constructor() {
    this.input=createInput()
    this.button=createButton("start")
    this.greeting = createElement('h2')
    this.title = createElement('h1')
    this.reset=createButton("RESET")
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.title.hide()
        this.greeting.hide()
        
    }
    display() {
    
        this.input.position(displayWidth/2,displayHeight/2) 
        
        this.button.position(displayWidth/2+10,displayHeight/2+40)
        this.button.style('font-size','30px')
        this.button.style('color','#FD8AE7')
        this.button.style('background-color','#A5F6FF')

        this.reset.position(displayWidth-100,40)

        this.title.html("Car Racing Game")
        this.title.style('color','#ffffff')
        this.title.style('font-size','50px')
        this.title.position(displayWidth/2,100)
       
            this.button.mousePressed(()=>{

            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount=playerCount+1
            player.index=playerCount
            player.update();
            player.updateCount(playerCount)
            this.greeting.html("Hello "+player.name)
            this.greeting.position(displayWidth/2,250)
            this.greeting.style('color','#ffffff')
            this.greeting.style('font-size','50px')
        })
        this.reset.mousePressed(()=>{
        database.ref('/').set({
        carsAtEnd:0,
        gameState:0,
        playerCount:0
        })
        location.reload()
        })
    }
    
}
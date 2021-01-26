class Player{
    constructor() {
    this.name=null;
    this.distance=0;
    this.index=null;
    this.ended=false;
    }
    getCount() {
        var playerCountRef=database.ref('playerCount')
        playerCountRef.on('value',function(data){
            playerCount=data.val()
        })
    }
    update() {
        var playerIndex="players/player"+this.index
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    })   
}
updateCount(count) {
    database.ref('/').update({
        playerCount:count
    }) 
}
static getPlayerInfo() {
    var playerInfoRef=database.ref('players')
    playerInfoRef.on('value',function(data){
        allPlayers=data.val()
    }) 
}
getCarsAtEnd() {
    database.ref('carsAtEnd').on("value",(data)=>{
carsAtEnd=data.val()
    })
}
static updateCarsAtEnd(rank) {
    database.ref('/').update({
        carsAtEnd:rank
    })
}
updateRank(rank) {
    var playerIndex="players/player"+this.index
    database.ref(playerIndex).update({
    rank:rank
    }) 
}
}
class room  {
    constructor(x,y, roomNum) {
        this.neighbors = [false,false,false,false] // north,south, eas,west
        this.x = x
        this.y = y
        this.roomNum = roomNum
    }

    addNeighbor(x,y,direction){
        this.neighbors [direction] = true
    }
}
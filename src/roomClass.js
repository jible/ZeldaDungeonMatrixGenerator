class room  {
    constructor(length, height, x,y, roomCount) {
        this.neighbors = [false,false,false,false] // north,south, eas,west
        this.x = x
        this.y = y
    }

    addNeighbor(x,y){
        this.neighbors.push([x,y])
    }
}
class dungeon  {
    constructor(width, height, roomCount, startX, startY, maxRooms) { // pass these as arguments to maintain scene/object context in the FSM
        this.maxRooms = maxRooms
        this.width = length
        this.height = height
        this.roomCount = roomCount
        this.matrix = []
        this.startX = startX
        this.startY = startY
        //make starter room
        // 
    }

    makeDungeon(){
        for (let x= 0; x<this.width;x < width++){
            this.matrix[x]= []
            for (let y = 0; y<this.width; y++){
                this.matrix[x][y] = null
            }
        }

        this.populateMatrix()

    }

    populateMatrix(){
        let roomCount = 0
        let previousRooms = []
        // populate the first room
        this.populateRoom(this.startX, this.startY)
        previousRooms [0] = [this.startX,this.startY]
        currentRooms = []
        roomCount++

        while (roomCount < maxRooms + 1){
            for ( let i = 0; i < previousRooms.length; i++){
                if (! roomCount < maxRooms + 1){
                    break
                }
                giveNeighbors()

            }
        }
    }

    giveNeighbors(x,y){

    }


    populateRoom(){

    }


}
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
                giveNeighbors(previousRooms[i][0],previousRooms[i][1])

            }
        }
    }

    giveNeighbors(x,y){
        let roomsAdded = 0
        let chance = 1
        let tryDirection
        while (true){
            tryDirection = Math.floor(Math.randomRange(0,3))
            if (tryDirection == 0){
                // look up. if the coord above isn't out of range and it isn't populated, populate it
                if ( y >= 0  && this.matrix[x][y] == null){
                    this.populateRoom(x,y, roomsAdded)
                    roomsAdded++
                }

            }

        }
        
        
    }


    populateRoom(x,y,roomCount){
        this.matrix[x][y] = new room()

    }


}
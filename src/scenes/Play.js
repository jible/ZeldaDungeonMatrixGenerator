class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
        console.log('zeroth one')
        let attempt = new Dungeon(15,15,8, 0, 20)
        attempt.printMatrix()
    }

    
}
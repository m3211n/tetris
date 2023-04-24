function initField () {
    for (let i = 0; i < 20; i ++) {
        let row: number[] = []
        for (let j = 0; j < 10; j++) {
            row.push(0)
        }
        matrix.push(row)
    }

}

function redrawField () {
    for (let i = 0; i < 20; i++) {
        let row: Sprite[] = []
        for (let j = 0; j < 10; j++) {
            let index = matrix[i][j]
            row.push(sprites.create(color[index], SpriteKind.Player))
            row[j].setPosition(j * 5 + 13, i * 5 + 13)
        }
        spritesGrid.push(row)
    }
    scoreSprite.setText("Score: " + score)
    linesSprite.setText("Lines: " + lines)
}

class tetrisPiece {

    shapeType: number // shape
    shapeRotation: number // rotation
    positionX: number // x-coord
    positionY: number // y-coord
    shapeMatrix: number[]

    constructor(s: number) {

        let pieceShape: number[][][] = [
            [[1, 5, 9, 13], [4, 5, 6, 7]],
            [[1, 5, 6, 10], [5, 6, 8, 9]],
            [[1, 4, 5, 8], [4, 5, 9, 10]],
            [[1, 4, 5, 6], [1, 5, 6, 9], [4, 5, 6, 9], [1, 4, 5, 9]],
            [[5, 6, 9, 10]],
            [[1, 5, 9, 10], [5, 6, 7, 9], [5, 6, 10, 14], [5, 9, 10, 11]],
            [[1, 5, 8, 9], [1, 5, 6, 7], [1, 2, 5, 9], [4, 5, 6, 10]]
        ]

        this.shapeType = s
        this.shapeRotation = 0
        this.positionX = 4
        this.positionY = 0

        this.shapeMatrix = pieceShape[this.shapeType][this.shapeRotation] 
    }

    placeInGame () {
        
    }

    rotate () {
        this.shapeRotation++
        if (((this.shapeType == 0 || this.shapeType == 1 || this.shapeType == 2) && (this.shapeRotation > 2)) || ((this.shapeType == 3 || this.shapeType == 5 || this.shapeType == 6) && (this.shapeRotation > 3)) || (this.shapeType == 4 )) {
            this.shapeRotation = 0
        }
    }

    moveDown () {
        this.positionY++
    }

    moveLeft () {
        this.positionX--
    }

    moveRight () {
        this.positionX++
    }
} 

game.onUpdate(function() {

})

game.onUpdateInterval(100, function() {
    for (let i = 0; i < 20; i++) {
        if (matrix[19-i].indexOf(0) == -1) {
            matrix.removeAt(19-i)
            let row: number[] = []
            lines++
            for (let j = 0; j < 10; j++) {
                row.push(0)
            }
            matrix.unshift(row)
        }
    }
    redrawField()
})

scene.setBackgroundImage(assets.image`game`)

let color = [
assets.image`cell0`,
assets.image`cell1`,
assets.image`cell2`,
assets.image`cell3`,
assets.image`cell4`,
assets.image`cell5`,
assets.image`cell6`,
assets.image`cell7`
]

let matrix: number[][] = []
let spritesGrid: Sprite[][] = []
let score: number = 0
let lines: number = 0

let textSprite = textsprite.create("TETRIS")
textSprite.setMaxFontHeight(10)
textSprite.setPosition(110, 13)

let scoreSprite = textsprite.create("Score: " + score)
scoreSprite.setMaxFontHeight(8)
scoreSprite.setPosition(110, 28)

let linesSprite = textsprite.create("Lines: " + lines)
linesSprite.setMaxFontHeight(8)
linesSprite.setPosition(110, 40)

initField()
redrawField()


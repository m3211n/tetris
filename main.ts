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

    shape: number // type
    rotation: number // rotation
    x: number // x-coord
    y: number // y-coord

    constructor(s: number) {
        this.shape = s
        this.rotation = 0
        this.x = 5
        this.y = 0
    }

    rotate () {
        this.rotation++
        if (((this.shape == 0 || this.shape == 1 || this.shape == 2) && (this.rotation > 2)) || ((this.shape == 3 || this.shape == 5 || this.shape == 6) && (this.rotation > 3)) || (this.shape == 4 )) {
            this.rotation = 0
        }
    }

    moveDown () {
        this.y++
    }

    moveLeft () {
        this.x--
    }

    moveRight () {
        this.x++
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

let pieceShape: number[][][] = [
    [[1, 5, 9, 13], [4, 5, 6, 7]],
    [[1, 5, 6, 10], [5, 6, 8, 9]],
    [[1, 4, 5, 8], [4, 5, 9, 10]],
    [[1, 4, 5 ,6], [1, 5, 6, 9], [4, 5, 6, 9], [1, 4, 5, 9]],
    [[5, 6, 9, 10]],
    [[1, 5, 9, 10], [5, 6, 7, 9], [5, 6, 10, 14], [5, 9, 10, 11]],
    [[1, 5, 8, 9], [1, 5, 6, 7], [1, 2, 5, 9], [4, 5, 6, 10]]
]

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


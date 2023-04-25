class tetrisGame {
    grid: number[][]

    constructor() {
        this.grid = []
        for (let i = 0; i < 20; i++) {
            let row: number[] = []
            for (let j = 0; j < 10; j++) {
                row.push(0)
                console.log(row)
            }
            this.grid.push(row)
        }
    }
}

scene.setBackgroundImage(assets.image`game`)

let titleSprite = textsprite.create("TETRIS")
titleSprite.setMaxFontHeight(10)
titleSprite.setPosition(110, 13)

let scoreSprite = textsprite.create("Score: 0")
scoreSprite.setMaxFontHeight(8)
scoreSprite.setPosition(110, 28)

let linesSprite = textsprite.create("Lines: 0")
linesSprite.setMaxFontHeight(8)
linesSprite.setPosition(110, 40)

const tetris = new tetrisGame()
console.log(tetris.grid)

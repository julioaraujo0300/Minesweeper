export class Tile extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, grid_x, grid_y, texture) {
        super(scene, x, y, texture)

        this.grid_pos = {
            x: grid_x,
            y: grid_y
        }
    }
}
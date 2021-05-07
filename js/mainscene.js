import {Tile} from './tile.js'

export default class MainScene extends Phaser.Scene {
    constructor(){
        super('MainScene');
    }

    init(){
        this.board = {
            width: 7,
            height: 9,
            bombs: 9,
            tile_size: 96,
            offset: {
                x: 102,
                y: 160
            }
        }
    }

    preload(){}

    create(){

        this.bg = this.add.sprite(0, 0, 'bg').setOrigin(0);

        this.createMap();
    }

    update(time){}

    createMap() {
        for(let w = 0; w < this.board.width; w++){
            for(let h = 0; h < this.board.height; h++){
                let t = new Tile(
                    this, 
                    w * this.board.tile_size + this.board.offset.x,
                    h * this.board.tile_size + this.board.offset.y,
                    w, h,
                    'square');
                    this.add.existing(t);   
            }
        }
    }
}
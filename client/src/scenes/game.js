import CardHandler from '../helpers/CardHandler';
import DeckHandler from '../helpers/DeckHandler';
import GameHandler from '../helpers/GameHandler';
import InteractiveHandler from '../helpers/InteractiveHandler';
import SocketHandler from '../helpers/SocketHandler';
import UIHandler from '../helpers/UIHandler';

let info;
let timer;
let alive = 0;

export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        });
    }

    preload() {

        this.load.image('cyanCardBack', 'src/assets/CyanCardBack.png');
        this.load.image('magentaCardBack', 'src/assets/MagentaCardBack.png');
        this.load.image('cyanBoolean', 'src/assets/Cyan_Boolean3x.png');
        this.load.image('magentaBoolean', 'src/assets/Magenta_Boolean3x.png');
        this.load.image('cyanPing', 'src/assets/Cyan_Ping3x.png');
        this.load.image('magentaPing', 'src/assets/Magenta_Ping3x.png');
        this.load.image('NF', 'src/assets/NewFajl.png');
        
    }

    create() {
	console.log('-----------XCVBNM!');
        this.CardHandler = new CardHandler();
        this.DeckHandler = new DeckHandler(this);
        this.GameHandler = new GameHandler(this);
        this.SocketHandler = new SocketHandler(this);
        this.UIHandler = new UIHandler(this);
        this.UIHandler.buildUI();
        this.InteractiveHandler = new InteractiveHandler(this);

        this.add.image(400, 300, 'NF');
        var x = Phaser.Math.Between(0, 800);
        var y = Phaser.Math.Between(0, 600);

        var box = this.add.image(x, y, 'crate');

        //  Make them all input enabled
        box.setInteractive();

        //  The images will dispatch a 'clicked' event when they are clicked on
        box.on('clicked', this.clickHandler, this);

        //  If a Game Object is clicked on, this event is fired.
        //  We can use it to emit the 'clicked' event on the game object itself.
        this.input.on('gameobjectup', function (pointer, gameObject) {
            console.log('XCVBNM!');
            gameObject.emit('clicked', gameObject);
        }, this);

        //  Display the game stats
        info = this.add.text(10, 10, '', { font: '48px Arial', fill: '#000000' });

        timer = this.time.addEvent({ delay: 10000, callback: this.gameOver, callbackScope: this });

    }

    update() {

    }
}
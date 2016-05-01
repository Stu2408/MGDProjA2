/**
 * Created by Tyrion on 01/05/2016.
 */



var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var board, slider;

function preload() {
    game.load.image('board', 'images/blankboard.png');
    game.load.image('switch', 'images/switch.png');
    game.load.image('title', 'images/title2.bmp');


}

function create() {

    game.add.sprite(0, 0, 'title');
    game.add.sprite(0, 150, 'board');
    game.add.sprite(3, 153, 'switch');


    board = new SwitchBoard();

    slider = board.getSwitch(0);

    //game.add.sprite(slider.getPosOn(), slider.getPosOn().Phaser.Point.y, 'switch');

    if(slider.getIsOnZZZ())
    {
        game.add.sprite(slider.getPosOn().x, slider.getPosOn().y, 'switch');
    }
    else
    {
        game.add.sprite(slider.getPosOff().x, slider.getPosOff().y, 'switch');
    }
}

function update() {
    board.update();
}
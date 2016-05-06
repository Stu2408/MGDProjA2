/**
 * Created by Tyrion on 01/05/2016.
 */



var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var board, spr1, spr2, spr3, spr4, spr5;

function preload() {
    game.load.image('board', 'images/blankboard.png');
    game.load.image('switch', 'images/switch.png');
    game.load.image('title', 'images/title2.bmp');


}

var sprSwitch1, sprSwitch2, sprSwitch3, sprSwitch4, sprSwitch5;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(0, 0, 'title');
    game.add.sprite(0, 150, 'board');

    board = new SwitchBoard();

    for(var i = 0; i < 5; i++)
    {
        spr1 = board.getSwitch(0);
        spr2 = board.getSwitch(1);
        spr3 = board.getSwitch(2);
        spr4 = board.getSwitch(3);
        spr5 = board.getSwitch(4);

        //slider.isOn = false;
        //game.add.sprite(slider.getPosOn(), slider.getPosOn().Phaser.Point.y, 'switch');
        switch(i)
        {
            case 0:
                if(spr1.getIsOnZZZ()){
                    sprSwitch1 = game.add.sprite(spr1.getPosOn().x, spr1.getPosOn().y, 'switch');
                }
                else {
                    sprSwitch1 = game.add.sprite(spr1.getPosOff().x, spr1.getPosOff().y, 'switch');
                }
                break;
            case 1:
                if(spr2.getIsOnZZZ()){
                    sprSwitch2 = game.add.sprite(spr2.getPosOn().x, spr2.getPosOn().y, 'switch');
                }
                else {
                    sprSwitch2 = game.add.sprite(spr2.getPosOff().x, spr2.getPosOff().y, 'switch');
                }
                break;
            case 2:
                if(spr3.getIsOnZZZ()){
                    sprSwitch3 = game.add.sprite(spr3.getPosOn().x, spr3.getPosOn().y, 'switch');

                }
                else {
                    sprSwitch3 = game.add.sprite(spr3.getPosOff().x, spr3.getPosOff().y, 'switch');
                }
                break;
            case 3:
                if(spr4.getIsOnZZZ()){
                    sprSwitch4 = game.add.sprite(spr4.getPosOn().x, spr4.getPosOn().y, 'switch');
                }
                else {
                    sprSwitch4 = game.add.sprite(spr4.getPosOff().x, spr4.getPosOff().y, 'switch');
                }
                break;
            case 4:
                if(spr5.getIsOnZZZ()){
                    sprSwitch5 = game.add.sprite(spr5.getPosOn().x, spr5.getPosOn().y, 'switch');
                }
                else {
                    sprSwitch5 = game.add.sprite(spr5.getPosOff().x, spr5.getPosOff().y, 'switch');
                }
                break;
        }
    }

}

function update() {
    var myArr = new Array();
    myArr.push(sprSwitch1);
    myArr.push(sprSwitch2);
    myArr.push(sprSwitch3);
    myArr.push(sprSwitch4);
    myArr.push(sprSwitch5);
    board.update(myArr);
    //console.log(myArr.length);
}
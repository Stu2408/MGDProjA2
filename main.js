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
    //game.add.sprite(3, 153, 'switch');


    board = new SwitchBoard();

    for(var i = 0; i < 5; i++)
    {
        slider = board.getSwitch(i);


        slider.isOn = false;
        //game.add.sprite(slider.getPosOn(), slider.getPosOn().Phaser.Point.y, 'switch');

        if(slider.getIsOnZZZ())
        {
            var on = game.add.sprite(slider.getPosOn().x, slider.getPosOn().y, 'switch');
            on.inputEnabled = true;
            on.events.onInputDown.add(function(){console.log('working');
                if(!on.isOn)
                    on = game.add.sprite(slider.getPosOff().x, slider.getPosOff().y, 'switch')});
        }
        else
        {
            var off = game.add.sprite(slider.getPosOff().x, slider.getPosOff().y, 'switch');
            off.inputEnabled = true;
            off.events.onInputDown.add(function(){console.log('working');
            off = game.add.sprite(slider.getPosOn().x, slider.getPosOn().y, 'switch');});
        }
    }

/*    on.inputEnabled = true;
    on.event.onInputDown.add(update, this);
    off.inputEnabled = true;
    off.event.onInputDown.add(update, this);*/

}

function update() {
    board.update();

    if(slider.getIsOnZZZ())
    {
        if(!slider.isOn)
            slider.posOff;
        else
            slider.posOn;
    }

}
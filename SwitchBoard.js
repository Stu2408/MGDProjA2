/**
 * Created by Tyrion on 01/05/2016.
 */

var switches = [];


function SwitchBoard ()
{
    this.switchCount = 5;
   // this.switches[switchCount] = Switch();

    switches[0] = new Switch(new Phaser.Point(3, 153),
                             new Phaser.Point(3, 303), Math.random());


    switches[1] = new Switch(new Phaser.Point(68, 153),
                             new Phaser.Point(68, 303), Math.random());


    switches[2] = new Switch(new Phaser.Point(133, 153),
                             new Phaser.Point(133, 303), Math.random());


    switches[3] = new Switch(new Phaser.Point(196, 153),
                             new Phaser.Point(196, 303), Math.random());


    switches[4] = new Switch(new Phaser.Point(263, 153),
                             new Phaser.Point(263, 303), Math.random());

}

SwitchBoard.prototype.getSwitch = function(id)
{
    return switches[id];
    //return this.switches[id];
};

var flag = false;

SwitchBoard.prototype.update = function(arrSprite)
{
    for(var i = 0; i < this.switchCount; i++) {
        switches[i].update(arrSprite[i]); // this.

        if(game.input.activePointer.isDown)
        {
            console.log(game.input.x, game.input.y);
            var minX = 0;//3;
            var maxX = 500;//27;
            var minY = 0;//302;
            var maxY = 500;//332;

            //console.log("mouse btn press");

            if(game.input.x > minX && game.input.x < maxX &&
                game.input.y > minY && game.input.y < maxY) {
                if (flag == false) {
                    flag = true;

                    switches[i].switchState();
                    console.log("first switch switched");
                }
            }
        }
    }

    if(game.input.activePointer.isUp) {

        flag = false;
    }
};
/**
 * Created by Tyrion on 01/05/2016.
 */

var switches = [];


function SwitchBoard ()
{
    this.switchCount = 5;
   // this.switches[switchCount] = Switch();

    switches[0] = new Switch(new Phaser.Point(3, 153),
                             new Phaser.Point(3, 303));


    switches[1] = new Switch(new Phaser.Point(68, 153),
                             new Phaser.Point(68, 303));


    switches[2] = new Switch(new Phaser.Point(133, 153),
                             new Phaser.Point(133, 303));


    switches[3] = new Switch(new Phaser.Point(196, 153),
                             new Phaser.Point(196, 303));


    switches[4] = new Switch(new Phaser.Point(263, 153),
                             new Phaser.Point(263, 303));


    /*    this.switches = [
            new Switch(Phaser.Point(50, 250),
                       Phaser.Point(50, 300))
        ];*/


}

SwitchBoard.prototype.getSwitch = function(id)
{
    return switches[id];
    //return this.switches[id];
};

SwitchBoard.prototype.update = function()
{
    for(var i = 0; i < this.switchCount; i++){
        switches[i].update(); // this.
    }

    if(game.input.activePointer.isDown)
    {
        console.log(game.input.x, game.input.y);
        var minX = 3;
        var maxX = 27;
        var minY = 302;
        var maxY = 332;

        if(game.input.x > minX && game.input.x < maxX &&
            game.input.y > minY && game.input.y < maxY)
        {
            switches[0].switchState()
        }
    }

};
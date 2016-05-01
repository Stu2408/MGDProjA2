/**
 * Created by Tyrion on 01/05/2016.
 */

function SwitchBoard ()
{
    this.switchCount = 6;
   // this.switches[switchCount] = Switch();

    this.switches = [
        new Switch(Phaser.Point(50, 250),
                   Phaser.Point(50, 300))
    ];


}

SwitchBoard.prototype.getSwitch = function(id)
{
    return this.switches[id];
};

SwitchBoard.prototype.update = function()
{
    //for(var i = 0; i < this.switchCount; i++)
    //{
    this.switches[0].update();
    //}
};
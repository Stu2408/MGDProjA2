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


        if(game.input.activePointer.isDown)
        {
            if (switches[i].isOn) {
                if (game.input.x > switches[i].posOn.x && game.input.x < (switches[i].posOn.x + 24)&&
                    game.input.y > switches[i].posOn.y && game.input.y < (switches[i].posOn.y + 30) ) {
                    switches[i].switchState();
                    console.log("switched "+i+" to off");
                }
            }
            else if (!switches[i].isOn){
                if (game.input.x > switches[i].posOff.x && game.input.x < (switches[i].posOff.x + 24) &&
                    game.input.y > switches[i].posOff.y && game.input.y < (switches[i].posOff.y + 30) ){
                    switches[i].switchState();
                    console.log("switched "+i+" to on");
                }
            }
        }
        switches[i].update(arrSprite[i]); // this.
    }

    if(game.input.activePointer.isUp) {

        flag = false;
    }
};
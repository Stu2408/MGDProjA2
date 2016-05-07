/**
 * Created by Tyrion on 01/05/2016.
 */

function SwitchBoard (x,y){
    this.switches = [];
    this.switchCount = 5;
    game.add.sprite(x, y, 'board');
    this.switches[0] = new Switch(new Phaser.Point(x+3, y+3),
                             new Phaser.Point(x+3, y+153), Math.random());

    this.switches[1] = new Switch(new Phaser.Point(x+68, y+3),
                             new Phaser.Point(x+68, y+153), Math.random());

    this.switches[2] = new Switch(new Phaser.Point(x+133, y+3),
                             new Phaser.Point(x+133, y+153), Math.random());

    this.switches[3] = new Switch(new Phaser.Point(x+196, y+3),
                             new Phaser.Point(x+196, y+153), Math.random());

    this.switches[4] = new Switch(new Phaser.Point(x+263, y+3),
                             new Phaser.Point(x+263, y+153), Math.random());
}

SwitchBoard.prototype.compare = function(goal){
    var comparison = true;
    for (var i = 0; i<this.switchCount ; i++){
        if (!this.switches[i].isOn === goal.switches[i].isOn)
            comparison = false;
    }

    return comparison;
};

SwitchBoard.prototype.update = function(){

    for(var i = 0; i < this.switchCount; i++) {
        if(game.input.activePointer.isDown)
        {
            if (this.switches[i].isOn) {
                if (game.input.x > this.switches[i].posOn.x && game.input.x < (this.switches[i].posOn.x + 24)&&
                    game.input.y > this.switches[i].posOn.y && game.input.y < (this.switches[i].posOn.y + 30) ) {
                    this.switches[i].switchState();
                }
            }
            else if (!this.switches[i].isOn){
                if (game.input.x > this.switches[i].posOff.x && game.input.x < (this.switches[i].posOff.x + 24) &&
                    game.input.y > this.switches[i].posOff.y && game.input.y < (this.switches[i].posOff.y + 30) ){
                    this.switches[i].switchState();
                }
            }
        }
        this.switches[i].update(); // this.
    }
};
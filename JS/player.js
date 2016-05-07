/**
 * Created by Tyrion on 07/05/2016.
 */
var style = { font: "18px Consolas", fill: "#00FF00", boundsAlignH: "center", boundsAlignV: "middle" };

function Player(playerName) {
    this.playerName = playerName;

}

Player.prototype.draw = function(x,y){
    this.sprite = game.add.sprite(x,y,'empty');
    this.buttonText = this.playerName;
    if (locations[this.playerName].win)
        this.buttonText = this.playerName + "  WINS";
    else
        this.buttonText = this.playerName;
    this.text = game.add.text(this.sprite.x+5,this.sprite.y+5,this.buttonText,style);
};

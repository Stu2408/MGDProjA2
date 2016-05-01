/**
 * Created by Tyrion on 01/05/2016.
 */



function Switch(newPosOn, newPosOff, newIsOn)
{
    //var game = document.getElementById("game");

    this.posOn = newPosOn;
    this.posOff = newPosOff;

    this.isOn = newIsOn;


}

Switch.prototype.getPosOn = function()
{
    return this.posOn;
};

Switch.prototype.getPosOff = function()
{
    return this.posOff;
};

Switch.prototype.getIsOnZZZ = function()
{
    return this.isOn;
};


Switch.prototype.switchState = function()
{
    if(!this.isOn)
        this.posOff;
    else
        this.posOn;
    //this.isOn = !this.isOn;
};
/*Switch.prototype.init = function(objGame)
{
    if(this.isOn)
        objGame.add.sprite(this.posOn.x, this.posOn.y);
    else
        objGame.add.sprite(this.posOff.x, this.posOff.y);
};*/

Switch.prototype.update = function()
{

};


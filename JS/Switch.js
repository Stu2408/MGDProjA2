/**
 * Created by Tyrion on 01/05/2016.
 */

function Switch(newPosOn, newPosOff, newIsOn){
    this.posOn = newPosOn;
    this.posOff = newPosOff;

    if(newIsOn < 0.5)
        this.isOn = false;
    else
        this.isOn = true;

    if (this.isOn)
        this.spr = game.add.sprite( this.posOn.x,  this.posOn.y, 'switch');
    else
        this.spr = game.add.sprite( this.posOff.x,  this.posOff.y, 'switch');
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
        this.isOn = true;
    else
        this.isOn = false;
};

Switch.prototype.update = function()
{
    if(this.isOn) //if the button is now set to on
    {
        this.spr.y = this.posOn.y;
    }
    else if (!this.isOn)
    {
        this.spr.y = this.posOff.y;
    }
};


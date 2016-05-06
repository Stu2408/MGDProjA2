/**
 * Created by Tyrion on 01/05/2016.
 */

function Switch(newPosOn, newPosOff, newIsOn)
{
    this.posOn = newPosOn;
    this.posOff = newPosOff;

    if(newIsOn < 0.5)
        this.isOn = false;
    else
        this.isOn = true;

    if(this.isOn)
        this.currPos = this.posOn;
    else
        this.currPos = this.posOff;

    this.flag = false;
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
    console.log(this.isOn);
    if(!this.isOn)
        this.isOn = true;
    else
        this.isOn = false;
    console.log(this.isOn);

};

Switch.prototype.update = function(spr)
{
    if(this.isOn) //if the button is now set to on
    {
        spr.y = this.posOn.y;
    }
    else if (!this.isOn)
    {
        spr.y = this.posOff.y;
    }

/*    if(this.isOn) //if the button is now set to on
    {
        if(this.currPos.y != this.posOn.y)
        {
            console.log("on");
            this.currPos.y = this.posOn.y;
            console.log(this.posOn.y);
            console.log(this.posOff.y);
            spr.y = this.posOn.y;
        }
    }
    else if (!this.isOn)
    {
        if (this.currPos.y != this.posOff.y)
        {
            console.log("off");
            this.currPos.y = this.posOff.y;
            console.log(this.posOn.y);
            console.log(this.posOff.y);
            spr.y = this.posOff.y;
        }
    }*/
};


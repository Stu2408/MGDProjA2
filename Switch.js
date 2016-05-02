/**
 * Created by Tyrion on 01/05/2016.
 */



function Switch(newPosOn, newPosOff, newIsOn)
{
    //var game = document.getElementById("game");

    this.posOn = newPosOn;
    this.posOff = newPosOff;

/*    var io = this;
 console.log(io);*/
    //this.isOn = newIsOn;

    if(newIsOn < 0.5)
        this.isOn = false;
    else
        this.isOn = true;

    //this.isOn = newIsOn;

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
    if(!this.isOn)
        this.posOff;
    else
        this.posOn;
    //if(this.flag == false)

    //    this.flag = true;
        console.log("some switch switched");
        //var io = this;
        //this.isOn = !this.isOn;
        //console.log(this.isOn);
};

/*Switch.prototype.init = function(objGame)
{
    if(this.isOn)
        objGame.add.sprite(this.posOn.x, this.posOn.y);
    else
        objGame.add.sprite(this.posOff.x, this.posOff.y);
};*/


Switch.prototype.update = function(spr)
{
    //isOn is undefined fuck nugget, sort it out!"!!
    var swi = this;
    console.log(swi);

    if(swi.isOn)
    {
        console.log("here now");
        if(swi.currPos.x != swi.posOn.x && swi.currPos.y != swi.posOn.y)
        {
            console.log("here now2");
            if(swi.currPos != swi.posOff){
                spr.x = swi.posOff.x;
                spr.y = swi.posOff.y;
            }else
                swi.currPos = swi.posOff;
            /*console.log("assigned posOff");
            spr.x = swi.posOff.x;
            spr.y = swi.posOff.y;
*/
            //this.flag = false;
        }
 /*   }
    else
    {*/
        else if(swi.currPos.x != swi.posOff.x && swi.currPos.y != swi.posOff.y)
        {
            console.log("here now3");
            if(swi.currPos = swi.posOff){
                spr.x = swi.posOn.x;
                spr.y = swi.posOn.y;
            }
            else
                swi.currPos = swi.posOn;

            /*console.log("assigned posOn");
            spr.x = swi.currPos.x;
            spr.y = swi.currPos.y;*/

            //this.flag = false;
        }
    }
};


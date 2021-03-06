/**
 * Created by Tyrion on 06/05/2016.
 */


function randName(){
    var i = 0;
    while(getKey(i)){
        i++;
    }
    return i;
}

function getKey(name){
    var loc;
    for(loc in locations){
        if(locations[loc].player === name){
            return loc;
        }
    }
    return null;
}

function addLocation(win,taken){
    //to prevent a duplicate name occurring
    if(getKey(win)) return;
    //name is valid, continue to add it
    fb.child("/location").push({
        win: win,
        taken: taken,
        timestamp: Firebase.ServerValue.TIMESTAMP
    }, function(err){
        if(err) console.dir(err);
    });
}

function updateLocation(ref, win, taken){
     fb.child("/location/" + ref).set({
         win: win,
         taken: taken,
         timestamp: Firebase.ServerValue.TIMESTAMP
     }, function(err) {
        if(err) console.dir(err);
     });
 }

function removeLocation(ref){
    fb.child("/location/" +ref).set(null, function(err){
        if(err) console.dir(err);
    });
}

var context;

var isRunning = true;

function run(){
    console.log('main loop');
    while(isRunning)
    {
        update();
        draw();
    }
}
/*

function update(){
    board.update();
}

function draw(){
    console.log("before");
    if(currentState === EState.Game && isBoardLoaded && isSwitchLoaded)
    {
        console.log("wheeey");
        board.draw();
    }
}*/

/**
 * Created by Tyrion on 06/05/2016.
 */



var fb = new Firebase("https://switchboardmgd.firebaseio.com/"),
    locations = { },
    result_box = document.getElementById("result");
if (fb) {
    // This gets a reference to the 'location" node.
    var fbLocation = fb.child("/location");
    // Now we can install event handlers for nodes added, changed and removed.
    fbLocation.on('child_added', function(sn){
        var data = sn.val();
        console.dir({'added': data});
        locations[sn.key()] = data;
        //showLocations();
    });
    fbLocation.on('child_changed', function(sn){
        var data = sn.val();
        locations[sn.key()] = data;
        console.dir({'moved': data})
        // showLocations();
    });
    fbLocation.on('child_removed', function(sn){
        var data = sn.val();
        delete locations[sn.key()];
        console.dir(({'removed': data}));
        //  showLocations();
    });
}


var EState = {
    Lobby : 0,
    Game : 0
};
var currentState = EState.Lobby;

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

function addLocation(name){
    //to prevent a duplicate name occurring
    if(getKey(name)) return;
    //name is valid, continue to add it
    fb.child("/location").push({
        player: name,
        timestamp: Firebase.ServerValue.TIMESTAMP
    }, function(err){
        if(err) console.dir(err);
    });
}


function removeLocation(ref){
    fb.child("/location/" +ref).set(null, function(err){
        if(err) console.dir(err);
    });
}



document.getElementById("ready").addEventListener("click", function(){
//document.getElementById("canvas").onmouseup = function(evt) {
    var name;
    name = randName();
    //if(currentState == my.namespace.EState.Lobby){
    if(name < 6) {
        if (!getKey(name)) {
            addLocation(name);
        }
    }
    else // if name > 6
    {
        console.log("Player failed to join the game as game is full");
        alert("Game is full!")
    }

    if(name == 5)
    {
        currentState = EState.Game;
    }
});


var context;

var board = new Board();

var isRunning = true;

function run()
{
    console.log('main loop');
    while(isRunning)
    {

        update();
        draw();
    }
}

function update()
{
    if(currentState === EState.Game && isBoardLoaded && isSwitchLoaded)
    {
        board.update();
    }
}

function draw()
{
    console.log("before");
    if(currentState === EState.Game && isBoardLoaded && isSwitchLoaded)
    {
        console.log("wheeey");
        board.draw();
    }
}

window.onload = function(){
    context = document.getElementById("canvas").getContext("2d");
    console.log('wheeey');
    board.loadAssets("images/blankboard.png", "images/switch.png", function(){
        console.log("wheeey");
        run();
    });
};

document.getElementById("exit").addEventListener("click", function(){
    var name;
    name = document.getElementById('name').value;
    removeLocation(getKey(name));
});
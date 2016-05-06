/**
 * Created by Tyrion on 01/05/2016.
 */

var fb = new Firebase("https://switchboardmgd.firebaseio.com/");
var locations = {};

if (fb) {
    // This gets a reference to the 'location" node.
    var fbLocation = fb.child("/location");
    // Now we can install event handlers for nodes added, changed and removed.
    fbLocation.on('child_added', function(sn){
        var data = sn.val();
        locations[sn.key()] = data;
    });
    fbLocation.on('child_changed', function(sn){
        var data = sn.val();
        locations[sn.key()] = data;
    });
    fbLocation.on('child_removed', function(sn){
        delete locations[sn.key()];
    });
}

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var playerName;
var board, goal;

function getEmpty(taken) {
    var loc;
    for(loc in locations){
        if(locations[loc].taken === taken){
            return loc;
        }
        //console.log(loc);
    }
    //console.log(locations);
    //console.log(loc);
    return null;
}

function preload() {
    game.load.image('board', 'images/blankboard.png');
    game.load.image('switch', 'images/switch.png');
    game.load.image('title', 'images/title2.bmp');
    game.load.image('join', 'images/join.png');

    game.load.image('p1', 'images/p1.png');
    game.load.image('p2', 'images/p2.png');
    game.load.image('p3', 'images/p3.png');
    game.load.image('p4', 'images/p4.png');
    game.load.image('p5', 'images/p5.png');
    game.load.image('p6', 'images/p6.png');

    game.load.image('p1win', 'images/p1win.png');
    game.load.image('p2win', 'images/p2win.png');
    game.load.image('p3win', 'images/p3win.png');
    game.load.image('p4win', 'images/p4win.png');
    game.load.image('p5win', 'images/p5win.png');
    game.load.image('p6win', 'images/p6win.png');

    updateLocation("player1",'0',false);
    updateLocation("player2",'0',false);
    updateLocation("player3",'0',false);
    updateLocation("player4",'0',false);
    updateLocation("player5",'0',false);
    updateLocation("player6",'0',false);


    /*addLocation('0',false);
    addLocation('1',false);*/
    /*document.getElementById("ready").addEventListener("click", function(){
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
    });*/

   /* var name;
    name = randName();
    console.log(name);

    if(name < 6) {
        if (!getKey(name)) {
            addLocation(name);
            if (locations[getKey(name)].taken) {
                playerName = name;
                updateLocation(getKey(playerName), playerName, true);
            }
        }
    }
    else // if name > 6
    {
        console.log("Player failed to join the game as game is full");
        alert("Game is full!")
    }*/

    /*for (var i=0; i<6;i++){
        addLocation(i);
        if (locations[getKey(i)].taken) {
            playerName = i;
            updateLocation(getKey(playerName), playerName, true);
            break;
        }
    }*/
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'title');

    board = new SwitchBoard(0,150);
    goal = new SwitchBoard(500,150);
    game.add.button(364,480,'join',join,this);

}

function update() {
    board.update();
    updateLocation(playerName,'0',true);

    if (board.compare(goal))
        console.log(playerName + " MATCHED!");
}

function join() {
    console.log(getEmpty(false));
    playerName = getEmpty(false);
    console.log(playerName);
    updateLocation(playerName,'0',true);
}

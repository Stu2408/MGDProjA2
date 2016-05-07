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

var player = new Player(null);
var winner = new Player(null);
var board, goal;

function getEmpty(taken) {
    var loc;
    for(loc in locations){
        if(locations[loc].taken === taken){
            return loc;
        }
    }
    return null;
}

function preload() {
    game.load.image('board', 'images/blankboard.png');
    game.load.image('switch', 'images/switch.png');
    game.load.image('title', 'images/title2.bmp');
    game.load.image('join', 'images/join.png');


    game.load.image('player', 'images/player.png');
    game.load.image('goal', 'images/goal.png');

    game.load.image('empty', 'images/empty.png');

    updateLocation("Player 1",false,false);
    updateLocation("Player 2",false,false);
    updateLocation("Player 3",false,false);
    updateLocation("Player 4",false,false);
    updateLocation("Player 5",false,false);
    updateLocation("Player 6",false,false);
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'title');
    game.add.sprite(109, 335, 'player');
    game.add.sprite(619, 335, 'goal');

    board = new SwitchBoard(0,150);
    goal = new SwitchBoard(510,150);
    game.add.button(364,480,'join',join,this);
}

function checkOthers(){
    var loc;
    for (loc in locations){
        if (locations[loc].win)
        {
            if (loc === player.playerName) {}
            else {
                winner.playerName = loc;
                winner.draw(325,280);
            }
        }
    }
}

function update() {
    if (player.playerName !=null) {
        board.update();
        updateLocation(player.playerName, board.compare(goal), true);
        player.draw(325,240);
        checkOthers();
    }
}

function join() {
    console.log(getEmpty(false));
    if (player.playerName==null) {
        player.playerName = getEmpty(false);
        console.log(player.playerName);
        updateLocation(player.playerName, false, true);
    }
    else {
        updateLocation(player.playerName, false, false);
        player.playerName = getEmpty(false);
        console.log(player.playerName);
        updateLocation(player.playerName, false, true);
    }
}

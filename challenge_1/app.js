
var gameTable = document.getElementById('gameBoard');

var piece = 'x';
var piecesPlaced = 0;
document.getElementById('current-player').innerHTML = (`Current Player: ${piece}`);
var consoleLoggingEventListener = function () {
	// only able to place a piece if there is nothing in the tile
	if (this.innerHTML === '') {


		// alternate pieces
		this.innerHTML = piece;

		// evaluate game on just placed piece
		evaluteGameState(event.target.id, piece);

		//alternate piece type
		if (piece === 'x') {
			piece = 'o';
		} else if (piece === 'o') {;
			piece = 'x';
		}
		
		//show current player
		if (piecesPlaced < 8) {
			document.getElementById('current-player').innerHTML = (`Current Player: ${piece}`);
		} else {
			document.getElementById('current-player').innerHTML = (`Draw!`);
		}
		piecesPlaced++;
		//after each placement, check board for winning condition
		
		//potentially remove event listener off of thing that clicked it to prevent further clicks		
	}	
}

//do I even have to do this, I think I can just access all td's and jsut add eventhandlers to each of them
var tableElements = document.getElementsByTagName("td");
for (var k = 0; k < tableElements.length; k++) {
	currentTd = tableElements[k];
	currentTd.addEventListener("click", consoleLoggingEventListener);
}


var currentPlayer = function() {
	// every time this is called, should alternate a symbol
	var start = 'x';
	return 
}

// after each piece is placed, make a check to see if someone has won or if there is a tie
	// when someone wins display the winner
var game = [[[''],[''],['']],[[''],[''],['']],[[''],[''],['']]];
var evaluteGameState = function (locationString, value) {
	var locationArr = locationString.split(',');
	// console.log('placed at ', JSON.stringify(locationArr), 'with a ', value);

	// have an internal version of game state
	
	// place
	var x = locationArr[0];
	var y = locationArr[1];
	game[x][y] = value;
	// console.log(value)
	console.log(game);
	// after each placement
	//iterate through x row and check if all values match
	var winner = false;
	var rowMatches = 0
	for(var j = 0; j < 3; j++) {
		if (value === game[x][j]){
			rowMatches++
		} 
		if (rowMatches === 3) {
			var winner = true;
			console.log('you are a winrar!');
		}
	}

	
	// also check if board is full
	// when condition is met, declare who is the winner and prompt with a reset
}


// have a new game button that clears the game and resets board state\
var resetButton = document.getElementById("reset-game");
var resetGame = function() {
	for (var i = 0; i < tableElements.length; i++) {
		console.log('clearing!')
		tableElements[i].innerHTML = '';
	}
	game = [[[''],[''],['']],[[''],[''],['']],[[''],[''],['']]];
}
resetButton.addEventListener("click", resetGame);


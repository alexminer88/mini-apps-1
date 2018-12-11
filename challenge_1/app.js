
var gameTable = document.getElementById('gameBoard');

var piece = 'x';
var piecesPlaced = 0;
var isWinner = false;
document.getElementById('current-player').innerHTML = (`Current Player: ${piece}`);
var consoleLoggingEventListener = function () {
	// only able to place a piece if there is nothing in the tile
	if (this.innerHTML === '' || isWinner === true) {

		// alternate pieces
		this.innerHTML = piece;

		// evaluate game on just placed piece
		isWinner = evaluteGameState(event.target.id, piece);
		if (isWinner) {
			document.getElementById('current-player').innerHTML = (`Current Player: ${piece} is the winner!`);
			// alert(piece.toUpperCase(), ' is the winner');
			//turn off ability to place pieces
			return;
		}
		//alternate piece type
		if (piece === 'x') {
			piece = 'o';
		} else if (piece === 'o') {;
			piece = 'x';
		}
		
		//show current player
		document.getElementById('current-player').innerHTML = (`Current Player: ${piece}`);
		
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

	// have an internal version of game state
	
	// place
	var x = locationArr[0];
	var y = locationArr[1];
	game[x][y] = value;

	// after each placement
	//iterate through x row and check if all values match
	var winner = false;
	var rowMatches = 0
	for(var j = 0; j < 3; j++) {
		if (value === game[x][j]){
			rowMatches++;
		} 
		if (rowMatches === 3) {
			winner = true;
			console.log(value, ', you are a winrar!');
		}
	}

	//iterate through y column and check if all values match
	var colMatches = 0
	for (var i = 0; i < 3; i++) {
		if (value === game[i][y]){
			colMatches++;
		}
		if (colMatches === 3) {
			winner === true;
			console.log(value, ', you are a winrar!');
		}
	}

	//check diagonals
	var diagMain = 0;
	var diagMin = 0;
	for (var k = 0; k < 3; k++) {

		if (value === game[k][k]) {
			diagMain++;
		}
		if (value === game[2-k][k]) {
			diagMin++;
		}
		if (diagMain === 3 || diagMin === 3) {
			winner = true;
			console.log(value, ', you are a winrar!');
		}
	}

	// also check if board is full
	var boardFullness = 0;
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			if (game[i][j] === 'x' || game[i][j] === 'o')
				boardFullness++;
		}
	}
	if (boardFullness === 9 && winner === false) {
		console.log('Game is a draw :(');
	}
	console.log(boardFullness);
	// when condition is met, declare who is the winner and prompt with a reset
	console.log(winner);
	return winner;
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


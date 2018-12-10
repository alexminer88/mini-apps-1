

// populate board


//add event handlers for entire board
var gameTable = document.getElementById('gameBoard');
// var rows = gameTable.getElementByTagName("tr");
// for (var i = 0; i < rows.length; i++) {
// 	var currentRow = rows[i];
// }
// handle user clicks and place pieces alternatingly
// I might want to handle this differently, have handler on document ready. right now my handlers are on each piece, dunno if that is correct
// initialize first player
var piece = 'x';
var piecesPlaced = 0;
document.getElementById('current-player').innerHTML = (`Current Player: ${piece}`);
var consoleLoggingEventListener = function () {
	// only able to place a piece if there is nothing in the tile
	if (this.innerHTML === '') {
		// alternate pieces
		this.innerHTML = piece;
		if (piece === 'x') {
			piece = 'o';
		} else if (piece === 'o') {
			piece = 'x';
		}

		evaluteGameState();
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
var evaluteGameState = function () {
	// have an internal version of game state
	var game = [[],[],[]];
	// after each placement
	// check to see if board contains three in a row, either by row, column, or diagonal
		//check rows
	// also check if board is full
	// when condition is met, declar who is the winner and prompt with a reset
}


// have a new game button that clears the game and resets board state\
var resetButton = document.getElementById("reset-game");
var resetGame = function() {
	for (var i = 0; i < tableElements.length; i++) {
		console.log('clearing!')
		tableElements[i].innerHTML = '';
	}
}
resetButton.addEventListener("click", resetGame);


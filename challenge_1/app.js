

// populate board


//add event handlers for entire board
var gameTable = document.getElementById('gameBoard');
// var rows = gameTable.getElementByTagName("tr");
// for (var i = 0; i < rows.length; i++) {
// 	var currentRow = rows[i];
// }


// handle user clicks and place pieces alternatingly
// I might want to handle this differently, have handler on document ready. right now my handlers are on each piece, dunno if that is correct
var consoleLoggingEventListener = function () {
	// console.log(this);
	this.innerHTML = 'x';
	console.log("I was clicked!");
}

//do I even have to do this, I think I can just access all td's and jsut add eventhandlers to each of them
var tableElements = document.getElementsByTagName("td");
for (var k = 0; k < tableElements.length; k++) {
	currentTd = tableElements[k];
	// currentTd.addEventListener("click", consoleLoggingEventListener.bind(currentTd)); // this is one way of doing it, I am going to try doing it with an anon func
	// currentTd.addEventListener("click", function() {
	// 	var currentPiece = '0';

		

	// 	if (currentPiece === 'x') {
	// 		currentPiece = 'o';
	// 	} else if (currentPiece === 'o') {
	// 		currentPiece = 'x';
	// 	}
	// 	this.innerHTML = currentPiece;
	// 	console.log(currentPiece);
	// });
	currentTd.addEventListener("click", consoleLoggingEventListener);
}
var currentPlayer = function() {
	// every time this is called, should alternate a symbol
	var start = 'x';

	return 
}

// switch turns for placement

// after each piece is placed, make a check to see if someone has won or if there is a tie
	// when someone wins display the winner
var evaluteGameState = function () {
	// after each placement
	// check to see if board contains three in a row, either by row, column, or diagonal
	// also check if board is full
	// when condition is met, declar who is the winner and prompt with a reset
}


// have a new game button that clears the game and resets board state

var resetButton = document.getElementById("reset-game");
var resetGame = function() {
	for (var i = 0; i < tableElements.length; i++) {
		console.log('clearing!')
		tableElements[i].innerHTML = '';
	}
}
resetButton.addEventListener("click", resetGame);


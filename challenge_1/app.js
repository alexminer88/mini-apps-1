
var gameTable = document.getElementById('gameBoard');


// starting state 
var piece = 'x';
var piecesPlaced = 0;
var isWinner = false;
var previousWinner = null;

document.getElementById('current-player').innerHTML = (`Current Player: ${piece}`);
var consoleLoggingEventListener = function () {
	// only able to place a piece if there is nothing in the tile
	if (this.innerHTML === '') {
		//current piece to be placed
		this.innerHTML = piece;

		isWinner = evaluteGameState(event.target.id, piece);
		if (isWinner) {
			document.getElementById('current-player').innerHTML = (`Current Player: ${piece} is the winner!`);
			previousWinner = piece;
			console.log(`${piece}, you are the winner!`);
			setTimeout(()=>{
				alert(`${piece}, you are the winner!`);
				incrementWinnerandUpdate(previousWinner);
				resetGame();
			}, 250);
			
			
		}
		

		if (!isWinner) {
			piece = piece === 'x' ? 'o' :'x';
			document.getElementById('current-player').innerHTML = (`Current Player: ${piece}`);			
		}		
	}	
}

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

	var x = locationArr[0];
	var y = locationArr[1];
	game[x][y] = value;

	// after each placement:
	//iterate through x row and check if all values match
	var winner = false;
	var rowMatches = 0
	for(var j = 0; j < 3; j++) {
		if (value === game[x][j]){
			rowMatches++;
		} 
		if (rowMatches === 3) {
			winner = true;
		}
	}

	//iterate through y column and check if all values match
	var colMatches = 0
	for (var i = 0; i < 3; i++) {
		if (value === game[i][y]){
			colMatches++;
		}
		if (colMatches === 3) {
			winner = true;
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
		document.getElementById('current-player').innerHTML = (`Game is a draw!`);
		alert('Game is a draw :(');
		resetGame();
	}
	return winner;
}

// have a new game button that clears the game and resets board state\
var resetButton = document.getElementById("reset-game");
var resetGame = function() {
	for (var i = 0; i < tableElements.length; i++) {
		tableElements[i].innerHTML = '';
	}
	game = [[[''],[''],['']],[[''],[''],['']],[[''],[''],['']]];
	// resetting the game should alternate who starts first
	//update current-player
	piece = piece === 'x' ? 'o' :'x';
	document.getElementById('current-player').innerHTML = (`Current Player: ${piece}`);
}

resetButton.addEventListener("click", resetGame);

// increments the winner's win count and updates the dom
// takes in the winner's piece type
var incrementWinnerandUpdate = function(value) {
	var currentScore = document.getElementById(`player-score-${value}`).innerText;
	currentScore = parseInt(currentScore) + 1;
	// currentScore++;
	console.log(currentScore);
	document.getElementById(`player-score-${value}`).innerText = currentScore;
}


// update player names based on input field
var updatePlayerButton = document.getElementById("update-players");
var updatePlayerNames = function() {
	var player1 = document.getElementById("player-name-1").value;
	var player2 = document.getElementById("player-name-2").value;
	document.getElementById("player-x").innerText = `${player1} (X):` || document.getElementById("player-x").innerText;
	document.getElementById("player-o").innerText = `${player2} (O):` || document.getElementById("player-o").innerText;
}

updatePlayerButton.addEventListener("click", updatePlayerNames);



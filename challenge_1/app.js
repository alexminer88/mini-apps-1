

// populate board


//add event handlers for entire board
var gameTable = document.getElementById('gameBoard');
// var rows = gameTable.getElementByTagName("tr");
// for (var i = 0; i < rows.length; i++) {
// 	var currentRow = rows[i];
// }

//do I even have to do this, I think I can just access all td's and jsut add eventhandlers to each of them
var tableElements = document.getElementsByTagName("td");
for (var k = 0; k < tableElements.length; k++) {
	console.log('test inside for loop');
	currentTd = tableElements[k];
	currentTd.innerHTML = "hi"; //this is currently working
}
// handle user clicks and place pieces alternatingly

// switch turns for placement

// after each piece is placed, make a check to see if someone has won or if there is a tie
	// when someone wins display the winner

// have a new game button that clears the game and resets board state
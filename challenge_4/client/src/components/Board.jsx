import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square.jsx';

var Board = function(props) {

	var boardArray = [];

	for(var i = 0; i < 7; i++) {
		var col = [];
		col.push('<span>');
		for(var j = 0; j < 8; j++) {
			col.push(<Square x={i} y={j}/>)
		}
		col.push('</span>');
		boardArray.push(col);
	}
	return (
		<div class = "board">
		There be squares
			{boardArray};
		</div>
	)
}

export default Board;
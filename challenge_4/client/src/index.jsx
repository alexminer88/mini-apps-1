import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state={};
	// Binding Event Handlers
	};

	render() {
		return (
			<div>
				<div>Hello thar!!</div>
				<Board />
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
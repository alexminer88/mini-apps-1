


class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			name: '',
			email: '',
			password: '',
			address: {
				line1: '',
				line2: '',
				city: '',
				state: '',
				zipcode: ''
			},
			phoneNumber: '',
			creditCard: '',
			expiryDate: '',
			cvv: '',
			billingZipCode: ''

		}
	}

	render() {
		return (
			<div>
				<h1>This is Testing </h1>
			</div>
		)
	};
}


ReactDOM.render(<App />, document.getElementById('root'));
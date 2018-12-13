


class App extends React.Component {
	constructor(props){
		super(props);


		//these don't have to be state variables, I can have some other things be state variables,
		// such as what we are currently displaying
		this.state = {
			current: '', //will show current react component

			formOne: {
				name: '',
				email: '',
				password: ''
			},

			formTwo: {
				address: {
					line1: '',
					line2: '',
					city: '',
					state: '',
					zipcode: ''
				},
				phoneNumber: ''
			},

			formThree: {
				creditCard: '',
				expiryDate: '',
				cvv: '',
				billingZipCode: ''
			}
		};

		// binding handlers to this
		this.handleFormOneChange = this.handleFormOneChange.bind(this);
		this.handleFormTwoChange = this.handleFormTwoChange.bind(this);
		this.handleFormThreeChange = this.handleFormThreeChange.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
	};

	handleFormOneChange(event) {
		event.preventDefault();
		// console.log(event.target);
		// this.formOne = event.target.name;
		// this.setState({formOne["name"]: event.target.name,
		// 	formOne.email: event.target.email,
		// 	formOne.password: event.target.password
		// });
		this.setState({formOne: {name:event.target.name, email:event.target.email, password:event.target.password}});
		console.log(this.state.formOne);
		// this.formOne[event.target];
	}

	handleFormTwoChange(event) {
		
	}

	handleFormThreeChange(event) {

	}

	changeHandler(event) {
		this.formOne.name = event.target.value;
		console.log(this.formOne.name);
	}

	render() {
		return (
			<div>
				<h1>This is Testing </h1>
				<Checkout />
				<FormOne handleFormOneChange = {this.handleFormOneChange}/>
				<FormTwo />
				<FormThree />
			</div>
		)
	};
}

function Checkout(props) {
	return(
		<div> This will be the Checkout Button! </div>
	)
}

function FormOne(props) {
		// console.log('I was triggered during render');
	return (
	
	
		<div>
			This will be Form One
			<form onSubmit = {props.handleFormOneChange}>
				<label>Name</label>
				<input type="text" name="name"/>
				<label>Email</label>
				<input type="text" name="email" />
				<label>Password</label>
				<input type="text" name="password" />
				<input type="submit" value="Next" />
			</form>
		</div>
	)
}

function FormTwo(props) {
	return (
		<div>
			This will be form Two 
			<form>
				<label>Address Line 1</label>
				<input type="text" name="address-line-one" />
				<label>Address Line 2</label>
				<input type="text" name="address-line-two" />
				<label>City</label>
				<input type="text" name="city" />
				<label>Zip Code</label>
				<input type="text" name="zipcode" />
				<label>Phone Number</label>
				<input type="text" name="phoneNumber" />
				<input type="submit" value="Next" onClick = {props.handleFormTwoChange}/>
			</form>
		</div>
	)
}

function FormThree(props) {
	return (
		<div>
			This will be form Three 
			<form>
				<label>Credit Card Number</label>
				<input type="text" name="creditCard" />
				<label>Expiry Data</label>
				<input type="text" name="expiryDate" />
				<label>CVV</label>
				<input type="text" name="cvv" />
				<label>Billing Zipcode</label>
				<input type="text" name="billingZipCode" />
				<input type="submit" value="Purchase" onClick = {props.handleFormThreeChange}/>
			</form> 
		</div>
	)
}

function PurchasePage(props) {
	return (
		<div>
			<div>	</div>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));

// window.App = App;
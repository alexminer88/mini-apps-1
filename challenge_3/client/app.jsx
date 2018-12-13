


class App extends React.Component {
	constructor(props){
		super(props);


		//these don't have to be state variables, I can have some other things be state variables,
		// such as what we are currently displaying
		this.state = {
			currentForm: 0, //will show current react component

			name: '',
			email: '',
			password: '',

			line1: '',
			line2: '',
			city: '',
			state: '',
			zipcode: '',
			phoneNumber: '',

			creditCard: '',
			expiryDate: '',
			cvv: '',
			billingZipCode: ''
		};

		// binding handlers to this
		this.handleFormOneChange = this.handleFormOneChange.bind(this);
		this.handleFormTwoChange = this.handleFormTwoChange.bind(this);
		this.handleFormThreeChange = this.handleFormThreeChange.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
		this.nextForm = this.nextForm.bind(this);
		this.onChangeHandlerFormOne = this.onChangeHandlerFormOne.bind(this);
	};

	handleFormOneChange(event) {
		event.preventDefault();
		// send state of form one to db
		// mount next component

	}

	handleFormTwoChange(event) {
		event.preventDefault();
	}

	handleFormThreeChange(event) {
		event.preventDefault();
	}

	changeHandler(event) {
		this.formOne.name = event.target.value;
		console.log(this.formOne.name);
	}

	nextForm(event) {
		this.setState({currentForm: this.state.count + 1});
	}

	onChangeHandlerFormOne(event) {
		var name = event.target.name;
		var value = event.target.value;
		this.setState({[name]: value});
	}

	render() {

		return (
			<div>
				<h1>Shopping Checkout</h1>
				<Checkout />
				<FormOne name={this.state.name} email={this.state.email} password={this.state.password} handleFormOneChange = {this.handleFormOneChange} onChangeHandlerFormOne={this.onChangeHandlerFormOne}/>
				<FormTwo line1={this.state.line1} line2={this.state.line2} city={this.state.city} state={this.state.state} zipcode={this.state.zipcode} phoneNumber={this.state.phoneNumber} handleFormTwoChange = {this.handleFormTwoChange} onChangeHandlerFormOne={this.onChangeHandlerFormOne}/>
				<FormThree creditCard={this.state.creditCard} expiryDate={this.state.expiryDate} cvv={this.state.cvv} billingZipCode={this.state.billingZipCode} handleFormThreeChange = {this.handleFormThreeChange} onChangeHandlerFormOne={this.onChangeHandlerFormOne}/>
				<PurchasePage name={this.state.name} email={this.state.email} password={this.state.password} line1={this.state.line1} line2={this.state.line2} city={this.state.city} state={this.state.state} zipcode={this.state.zipcode} phoneNumber={this.state.phoneNumber} creditCard={this.state.creditCard} expiryDate={this.state.expiryDate} cvv={this.state.cvv} billingZipCode={this.state.billingZipCode}/>
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
		console.log('Here are my props: ', props);
	return (	
	
		<div>
			This will be Form One
			<form onSubmit = {props.handleFormOneChange}>
				<label>Name</label>
				<input type="text" name="name" value={props.name} onChange = {props.onChangeHandlerFormOne}/>
				<label>Email</label>
				<input type="text" name="email" value={props.email} onChange = {props.onChangeHandlerFormOne}/>
				<label>Password</label>
				<input type="text" name="password" value={props.password} onChange = {props.onChangeHandlerFormOne}/>
				<input type="submit" value="Next" />
			</form>
		</div>
	)
}

function FormTwo(props) {
	return (
		<div>
			This will be form Two 
			<form onSubmit = {props.handleFormTwoChange}>
				<label>Address Line 1</label>
				<input type="text" name="line1" value={props.line1} onChange = {props.onChangeHandlerFormOne}/>
				<label>Address Line 2</label>
				<input type="text" name="line2" value={props.line2} onChange = {props.onChangeHandlerFormOne}/>
				<label>City</label>
				<input type="text" name="city" value={props.city} onChange = {props.onChangeHandlerFormOne}/>
				<label>Zip Code</label>
				<input type="text" name="zipcode" value={props.zipcode} onChange = {props.onChangeHandlerFormOne}/>
				<label>Phone Number</label>
				<input type="text" name="phoneNumber" value={props.phoneNumber} onChange = {props.onChangeHandlerFormOne}/>
				<input type="submit" value="Next"/>
			</form>
		</div>
	)
}

function FormThree(props) {
	return (
		<div>
			This will be form Three 
			<form onSubmit = {props.handleFormThreeChange}>
				<label>Credit Card Number</label>
				<input type="text" name="creditCard" value={props.creditCard} onChange = {props.onChangeHandlerFormOne}/>
				<label>Expiry Data</label>
				<input type="text" name="expiryDate" value={props.expiryDate} onChange = {props.onChangeHandlerFormOne}/>
				<label>CVV</label>
				<input type="text" name="cvv" value={props.cvv} onChange = {props.onChangeHandlerFormOne}/>
				<label>Billing Zipcode</label>
				<input type="text" name="billingZipCode" value={props.billingZipCode} onChange = {props.onChangeHandlerFormOne}/>
				<input type="submit" value="Purchase"/>
			</form> 
		</div>
	)
}

function PurchasePage(props) {
	return (
		<div>
			<div>Form 1 Data
				<div>Name Given: {props.name} </div>
				<div>Email Given: {props.email} </div>
				<div>P/W: {props.password} </div>
			</div>
			<div>Form 2 Data
				<div>Address Line 1: {props.line1}</div>
				<div>Address Line 2: {props.line2}</div>
				<div>City: {props.city}</div>
				<div>State: {props.state}</div>
				<div>Zipcode: {props.zipcode}</div>
				<div>Phone Number: {props.phoneNumber}</div>
			</div>
			<div>Form 3 Data
				<div>Credit Card Number: {props.creditCard}</div>
				<div>Expiry Date: {props.expiryDate}</div>
				<div>CVV: {props.cvv}</div>
				<div>Billing Zip Code: {props.billingZipCode}</div>
			</div>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));

// window.App = App;
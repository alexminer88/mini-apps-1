//Build your Express app inside server.js

// Implement all the report generation logic on the server.


// point express to my client folder
// static files, the ones in the client I think, should be in a folder called public
var PORT = 8080;

var express = require('express');
var app = express();
app.use(express.static('client'));	// tells the server that any file that is requested should be found in the folder specified.
// app.use(express.json());
app.use(express.urlencoded({extended: true}));
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());


app.get('/', (req, res) => {
	res.send('Hello');
});

app.post('/upload-json', (req, res) => {
	// Post request will handle the manipulation of the data or call a function that does this
	// the function will go from JSON to CSV, I can start writing that
	// var text = req.query.userInput;
	// // console.log(text);
	// console.log("hi from post!");
	// console.log('the input text was: ', text)
	// res.send(text);
	console.log("Post Request Heard!");
	console.log(req.body);
	res.send('HI');
	// res.redirect('/');
});

app.listen(PORT, () => console.log(`JSON to CSV app listening on port ${PORT}!`));

// var jsonToCsv = function(json) {
// 	//maybe this isn't the best place to have this, but let us start writing it here

// 	// input: json
// 	// output: CSV
// 	var obj = JSON.parse(json);
// 	var csv = '';
// 	for (var key in obj) {

// 	}
// 	// might need to parse json data with json.parse first, this turns json into an object
// }
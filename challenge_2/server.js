var PORT = 8080;

var express = require('express');
var fileUpload = require('express-fileupload');
var app = express();
var path = require('path');
var fs = require('fs');
var util = require('util');

app.use(express.static('client'));	// tells the server that any file that is requested should be found in the folder specified.
app.use(express.urlencoded({extended: true}));
app.use(fileUpload());


app.get('/', (req, res) => {
	res.send('Hello');
});

app.post('/', (req, res) => {
	console.log("Post Request Heard!");
	// console.log(req);
	// console.log(req.files);
	// grab userInput from form data in index.html
	// var jsonUserInput = req.body.userInput;
	// parse json data into an object
	// var obj = JSON.parse(jsonUserInput); //used for form data
	var obj = JSON.parse(req.files.userInput.data.toString());
	console.log(obj);
	var x = jsonObjToCsv(obj);

	var readFile = util.promisify(fs.readFile);
	var writeFile = util.promisify(fs.writeFile);

	return (writeFile(path.join(__dirname, './client/results.csv'), x, (err)=>{
		return res.end('hello');
	}))
	// .then(()=>{

	// })

	res.send(`<!DOCTYPE html>
<html>
<head>
	<title>JSON to CSV Converter</title>
	<script type="text/javascript" src="app.js"></script>
</head>
<body>
	<h1>JSON to CSV Converter</h1>
	<form action="/" method="post" encType="multipart/form-data"> 
		<div>
			<label for="json-submission">Your JSON here:</label>
			<!-- <textarea id="json-submission" name="userInput" rows="5" cols="30"></textarea> -->
			<input type="file" name="userInput" />
			<input type='submit' value='Upload!' />
		</div>
		<div class="button">
			<input type="submit" name="">
		</div>
	</form>
	<div>${x}</div>
</body>
</html>`);
	// res.redirect('/');
});

app.listen(PORT, () => console.log(`JSON to CSV app listening on port ${PORT}!`));


//The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output),
//where the keys of the JSON objects will be the columns of the CSV report.
//You may assume the JSON data has a regular structure and hierarchy (see included sample file).
//In other words, all sibling records at a particular level of the hierarchy will have the same set of properties,
//but child objects might not contain the same properties.
//In all cases, every property you encounter must be present in the final CSV output.
//You may also assume that child records in the JSON will always be in a property called `children`.


var jsonObjToCsv = function(obj) {
	// create the csv that we will eventually output
	var csv = '';
	// create the array that will be split and joined to create the return csv
	var arr = [];

	// First create the header for the csv file, we are told that all values will match, there will be no missing entries
	var headerArr = [];
	for (var key in obj) {
		if (key !== 'children') {
			csv += key + ',';
			
			headerArr.push(key);
		}
	}
	// add header to the main array
	arr.push(headerArr);

	// create a recursive function that will go through the JSON object to add arrays for each json object entry into the array
	var recAdd = function(obj) {
		var entryArr = [];
		for (var key in obj) {
			if (key !== 'children'){
				entryArr.push(obj[key]);
			}
		}
		arr.push(entryArr);

		if (obj.hasOwnProperty('children')) {
			obj.children.forEach((child)=>{
				recAdd(child);
			});
		}
	}
	// call said recursive function
	recAdd(obj);

	arr = arr.map((element)=> {
		return element.join(',');
	});

	// csv = arr.join('</br>');
	csv = arr.join('\n');
	return csv;
	// might need to parse json data with json.parse first, this turns json into an object
}
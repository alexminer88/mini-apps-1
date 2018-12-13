/* Require Statements */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8081;
// Serve up static pages
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req,res) => {
	res.send('hello world');
});

app.listen(PORT, () => console.log(`multistep checkout app listening on port ${PORT}!`));
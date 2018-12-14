 
const express = require('express');
const app = express();
const PORT = 8585;

app.use(express.static('./client/dist'));

// app.get('/', (req, res) => {

// });

// app.post('/', (req,res) => {

// });

app.listen(PORT, () => console.log(`Connect 4 app listening on port ${PORT}!`));
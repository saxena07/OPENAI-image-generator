const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const { generateimg } = require('./generateimg');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/openai', generateimg);

app.listen(port , () => {
    console.log('server running successfully on port ' + port);
});


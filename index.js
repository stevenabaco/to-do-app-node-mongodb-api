// Require dependencies
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

module.exports.Todo = require("./models/todo");

const todoRoutes = require('./routes/todos')

// Add body parser using express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Add static file routes
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
// Add Routes
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes)

		app.listen(port, () => {
			console.log('App is running on Port 3000');
		})


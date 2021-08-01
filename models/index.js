// Add dependencies
const mongoose = require('mongoose');
// Setup mongoose
mongoose.set('debug', true);
mongoose.Promise = Promise;
// Connect to database
mongoose.connect(
	`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m9rfm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	}
);

module.exports.Todo = require("./todo");

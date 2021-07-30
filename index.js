const express = require('express'),
  app = express();
  port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!'});
});

app.get('/happy', (req, res) => {
	res.send(':)');
});

app.listen(port, () => {
	console.log('App is running on Port 3000');
});

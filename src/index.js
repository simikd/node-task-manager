const express = require('express');
require('./db/mongoose');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST;

app.use(express.json());

app.post('/users', (req, res) => {
	const user = new User(req.body);

	user.save().then(() => {
		res.send(user);
	}).catch((error) => {
		res.send('error: ' + error);
	});
});

app.listen(port, host);
console.log('Running on http://' + host + ':' + port);


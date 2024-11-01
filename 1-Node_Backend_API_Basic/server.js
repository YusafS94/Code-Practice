// Import express module
const express = require('express');
const cors = require('cors');

//whitelist all the domains

// Create an express application
const app = express();
app.use(cors());

// Define the port number
const PORT = 8000;

const users = [
	{ id: "1", name: 'John Doe' },
	{ id: "2", name: 'Jane Doe' },
	{ id: "3", name: 'Jim Doe' },
	{ id: "4", name: 'Yusaf Saddiq' },
	{ id: "5", name: 'Abbie Saddiq' },
];

const names = [
	{ name: 'John Doe' },
	{ name: 'Jane Doe' },
	{ name: 'Jim Doe' },
	{ name: 'Yusaf Saddiq' },
	{ name: 'Abbie Saddiq' }
];
// Declaring num as a let to allow for reassignment but outside any function that needs to be called again so it isnt reset every time.
let num = 0;

app.get('/', (req, res) => {
	// Incrementing num by 1
	num++;

	// Console logging a string and using the + operator to concatenate the string with the num variable. 
	// Used in ES5 and below
	console.log("GET request " + num)

	// Using template literals/strings to print the GET request string with the num variable.
	// Used in ES6 
	// Sending this as a res (response) in the client (browser or curl) rather than the terminal.
	res.json(`GET request ${num}`)
});

app.get('/names', (req, res) => {
	// res.json(names);
	const filteredNames = users.map(user => user.name)
	res.json(filteredNames);
});

// Define a route for GET requests to the root URL ('/')
app.get('/:id', (req, res) => {
	const id = req.params.id; //cats rats bats dogs 1 2 3
	const user = users.find((user) => user.id === id);
	// Send back some JSON data when this route is accessed
	if (!user) {
		return res.status(404).json({
			message: 'User not found',
		});
	}
	res.json({
		user,
	});
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

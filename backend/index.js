// Import the `connectToMongo` function from the './db' module
const connectToMongo = require('./db');

// Import the 'express' library to create an Express.js application
const express = require('express');

// Call the `connectToMongo` function to establish a connection to MongoDB
connectToMongo();

// Create an instance of an Express.js application
const app = express();

// Define the port where the Express.js server will listen for incoming requests
const port = 5000;

// Use JSON middleware to parse incoming JSON requests
app.use(express.json());

// Define routes for your application

// Example route that responds with 'Hello World!'
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// Define routes for authentication and notes API using external modules
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Start the Express.js server and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

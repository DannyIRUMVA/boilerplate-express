// Import the necessary packages
const express = require('express');
require('dotenv').config(); // Load environment variables from .env

// Create an instance of Express
const app = express();

// Your routes and other middleware go here

// Define the /json GET route handler
app.get('/json', (req, res) => {
  // Access the MESSAGE_STYLE environment variable and transform the response message
  const messageStyle = process.env.MESSAGE_STYLE || 'uppercase'; // Default to 'uppercase' if not set
  const message = messageStyle === 'uppercase' ? 'HELLO JSON' : 'Hello json';
  res.json({ message });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

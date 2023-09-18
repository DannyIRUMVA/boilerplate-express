const express = require('express');
const app = express();

// Load environment variables from .env
require('dotenv').config();

app.get('/json', (req, res) => {
  // Check the value of MESSAGE_STYLE
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    // If it's "uppercase," transform the message to uppercase
    res.json({ message: 'HELLO JSON' });
  } else {
    // Otherwise, return the default message
    res.json({ message: 'Hello json' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// signup.js (backend)
const express = require('express');
const cors = require('cors');
const axios = require('axios');

function startSignupServer(app) {
  app.use(express.json()); // Parse JSON in the request body
  app.use(cors()); // Enable CORS for all routes

  // Your existing routes...

  // Express route to handle user signup (POST request)
  app.post('/signup', async (req, res) => {
    try {
      // Your existing signup logic...

      // Make a request to the GraphQL server
      const response = await axios.post(graphqlServerUrl, {
        query: graphqlMutation,
        variables: {
          firstName,
          lastName,
          address,
          email,
          phone,
          password,
        },
      });

      // Send the GraphQL server's response back to the client
      res.send(response.data);
    } catch (error) {
      console.error('Error handling user signup:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Express route to handle requests to /signup (GET request)
  app.get('/signup', (req, res) => {
    res.status(405).json({ error: 'Method Not Allowed', message: 'Use POST method for user signup' });
  });
}

module.exports = startSignupServer;

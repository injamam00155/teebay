// example.js
const axios = require('axios');

function startUserServer(app) {
  // Express route to fetch data from GraphQL server
  app.get('/users', async (req, res) => {
    try {
      // GraphQL server API endpoint
      const graphqlServerUrl = 'http://localhost:5050/graphql';

      // GraphQL query
      const graphqlQuery = `
        query Query {
          users {
            address
            email
            firstName
            id
            lastName
            password
            phone
          }
        }
      `;

      // Make a request to the GraphQL server
      const response = await axios.post(graphqlServerUrl, { query: graphqlQuery });

      // Send the GraphQL server's response back to the client
      res.send(response.data); // Use response.data to access the response body

    } catch (error) {
      console.error('Error fetching data from GraphQL server:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
}

module.exports = startUserServer;

// index.js
const express = require('express');
const startUserServer = require('./users');
const startApolloServer = require('./server');

async function startServers() {
  const app = express();

  // Start the example server
  startUserServer(app);

  // Start the Apollo Server
  const apolloServer = startApolloServer();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const PORT = process.env.PORT || 5050;
  app.listen(PORT, () => {
    console.log(`Servers are running on http://localhost:${PORT}`);
  });
}

startServers();

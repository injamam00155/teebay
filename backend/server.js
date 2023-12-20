// server.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./resolvers');

function startApolloServer(port) {
  // Read the GraphQL schema from the file
  const schemaFilePath = join(__dirname, 'schema.graphql');
  const typeDefs = readFileSync(schemaFilePath, 'utf-8');

  // Create the schema using @graphql-tools/schema
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const server = new ApolloServer({ schema });
  return server;
}

async function startServer() {
  const server = startApolloServer();
  await server.start(); // Wait for server to start before applying middleware

  const app = express();

  // Integrate Apollo Server with Express
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || port;
  app.listen(PORT, () => {
    console.log(`GraphQL Server is running on http://localhost:${PORT}${server.graphqlPath}`);
  });
}

module.exports = startServer;

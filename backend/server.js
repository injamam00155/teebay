// graphql-server.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./resolvers');

async function startServer() {
  // Read the GraphQL schema from the file
  const schemaFilePath = join(__dirname, 'schema.graphql');
  const typeDefs = readFileSync(schemaFilePath, 'utf-8');

  // Create the schema using @graphql-tools/schema
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const server = new ApolloServer({ schema });
  await server.start();

  const app = express();

  // Integrate Apollo Server with Express
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 5050;
  app.listen(PORT, (req,res) => {
    console.log(`GraphQL Server is running on http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();

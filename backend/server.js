// server.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./resolvers');

function startApolloServer() {
  // Read the GraphQL schema from the file
  const schemaFilePath = join(__dirname, 'schema.graphql');
  const typeDefs = readFileSync(schemaFilePath, 'utf-8');

  // Create the schema using @graphql-tools/schema
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const server = new ApolloServer({ schema });
  return server;
}

module.exports = startApolloServer;

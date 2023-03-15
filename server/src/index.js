const { ApolloServer } = require("apollo-server");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connection successful");
    return server.listen({ port: 4000 });
  })
  .then((res) => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port ${res.port}
    📭  Query at http://localhost:${res.port}
  `);
  });

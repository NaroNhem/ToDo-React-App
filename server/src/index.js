const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema/schema");

// Mock data
const mocks = {
  Query: () => ({
    todos: () => [...new Array(3)],
  }),
  Todo: () => ({
    id: "1",
    title: "I'm a todo",
    isComplete: false,
  }),
};

const server = new ApolloServer({ typeDefs, mocks });

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
});

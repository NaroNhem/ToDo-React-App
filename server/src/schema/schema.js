const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    todos: [Todo!]
  }

  type Todo {
    id: ID!
    title: String!
    isComplete: Boolean
  }
`;

module.exports = typeDefs;

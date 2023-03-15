const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getTodos: [Todo!]
  }

  type Todo {
    id: ID!
    title: String!
    isComplete: Boolean
  }

  input TodoInput {
    title: String
    isComplete: Boolean
  }

  type Mutation {
    createTodo(todoInput: TodoInput): Todo
    deleteTodo(ID: ID!): Boolean
    editTodo(ID: ID!, todoInput: TodoInput): Todo
  }
`;

module.exports = typeDefs;

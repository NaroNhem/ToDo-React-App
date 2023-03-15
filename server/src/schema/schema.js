const { gql } = require("apollo-server");

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    isComplete: Boolean
  }

  input newTodoInput {
    title: String
  }

  input editedTodoInput {
    id: ID!
    title: String
    isComplete: Boolean
  }

  type Query {
    getTodos: [Todo]
  }

  type Mutation {
    createTodo(newTodo: newTodoInput): Todo
    deleteTodo(ID: ID!): Boolean
    editTodo(editedTodo: editedTodoInput!): Todo
  }
`;

module.exports = typeDefs;

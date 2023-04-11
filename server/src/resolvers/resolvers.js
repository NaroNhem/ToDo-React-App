const Todo = require("../models/Todo");

module.exports = {
  Query: {
    async getTodos(_, {}) {
      return await Todo.find().sort({ createdAt: -1 });
    },
  },
  Mutation: {
    async createTodo(_, { newTodo: { title } }) {
      const newTodo = new Todo({
        title,
        isComplete: false,
      });

      const res = await newTodo.save();
      return {
        id: res.id,
        ...res._doc,
      };
    },
    async deleteTodo(_, { ID }) {
      const wasDeleted = await Todo.deleteOne({ _id: ID }).deletedCount;
      return wasDeleted;
    },
    async editTodo(_, { editedTodo: { id, title, isComplete } }) {
      const editedTodo = await Todo.findOneAndUpdate(
        { _id: id },
        { title, isComplete },
        { returnDocument: "after" }
      );

      return {
        id: editedTodo._id,
        title: editedTodo.title,
        isComplete: editedTodo.isComplete,
      };
    },
  },
};

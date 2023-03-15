const { model, Schema } = require("mongoose");

const todoSchema = new Schema(
  {
    title: String,
    isComplete: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Todo", todoSchema);

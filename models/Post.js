const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    createdBy: {
      type: String,
      required: true,
    },
    title: {
        type: String,
        required: true,
        max: 50,
    },
    desc: {
      type: String,
      required: true,
      max: 500,
    },
    likes: {
      type: Number,
      default: 0,
    },
    likers: {
        type: Array,
        default: [],
    },
    comment: {
        type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
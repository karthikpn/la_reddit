import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "commentSchema" }],
    image: {
      type: String,
    },
    votes: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
export const comment = mongoose.model("Comment", commentSchema);

const postSchemaModel = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "commentSchema" }],
    votes: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchemaModel);
export default Post;

import expressAsyncHandler from "express-async-handler";
import Post from "../models/postModel.js";

export const createPost = expressAsyncHandler(async (req, res) => {
  const { _id: user } = req.user;
  const { title, description } = req.body;
  console.log(user);
  try {
    const post = await Post.create({
      user,
      title,
      description,
    });

    res.status(200).json(post);
  } catch (error) {
    throw new Error(error.message);
  }
});

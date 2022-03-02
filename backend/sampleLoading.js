import connectDB from "./connectDB.js";
import Post, { comment } from "./models/postModel.js";
import dotenv from "dotenv";

dotenv.config();
await connectDB();

const post = {
  user: "621e34289dd32fc428dbf8b3",
  title: "First Post",
  description: "Hi",
};

const Comment = await comment.create({
  user: "621e34289dd32fc428dbf8b3",
  title: "New comment",
});

const Secondcom = await comment.create({
  user: "621e34289dd32fc428dbf8b3",
  title: "Second comment",
});
Comment.comments.push(Secondcom);
Comment.save();

try {
  const p = await Post.create(post);
  p.comments.push(Comment);
  p.save();
  console.log(p);
} catch (error) {
  console.log(error);
}

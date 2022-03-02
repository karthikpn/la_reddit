import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

export const protect = expressAsyncHandler(async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      const { id } = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(id).select("-password");
      console.log(user);
      req.user = user;
      next();
    } catch (error) {
      res.status(400);
      console.log(error);
      throw new Error("Not Authorized!");
    }
  } else {
    res.status(400);
    throw new Error("Not Authorized!");
  }
});

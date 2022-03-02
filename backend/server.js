import express from "express";
import { errorHandler } from "./middleware/errorMiddleware.js";
import userRoute from "./routes/UserRoutes.js";
import dotenv from "dotenv";
import connectDB from "./connectDB.js";
import postRoute from "./routes/PostRoute.js";
const app = express();

dotenv.config();

connectDB();

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

app.use(errorHandler);

app.listen(5000, () => {
  console.log("Listening on Port 5000");
});

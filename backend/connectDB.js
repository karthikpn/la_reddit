import mongoose from "mongoose";

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    if (conn) console.log("MongoDB Connected to : ", conn.connection.host);
  } catch (error) {
    console.log(error);
  }
}
export default connectDB;

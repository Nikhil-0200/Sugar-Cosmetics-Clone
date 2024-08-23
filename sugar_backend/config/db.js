import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection = mongoose.connect(process.env.MONGODB_URL)

export default connection;
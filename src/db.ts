import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL as string || "mongodb://localhost:27017/docker_compose";
export const connectDB = async () => {
  await mongoose.connect(MONGODB_URL);
  console.log('database connected')
};


export const user = mongoose.model('user', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
}));
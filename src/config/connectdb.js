import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.set('strictQuery', false);
    await mongoose.connect("mongodb://127.0.0.1:27017/test_web_api_dev", {useNewUrlParser: true});
    console.log("connected!!!");
  } catch (err) {
    console.log(err);
  }
};

export { connectDB };

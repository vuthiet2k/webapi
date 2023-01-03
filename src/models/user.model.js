import mongoose from "mongoose";
import bcrypt from "bcrypt";

const User = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

User.methods.comparePassword = function (pass) {
  return bcrypt.compareSync(pass, this.password);
};

const UserModel = mongoose.model("users", User);

export default UserModel;

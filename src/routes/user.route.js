import express from "express";
import UserController from "../controller/user.controller.js"

const routerUser = express.Router();

routerUser.post('/', UserController.createUser)

export default routerUser;
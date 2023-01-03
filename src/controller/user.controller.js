import UserModel from "../models/user.model.js";

class UserController {
  getUser() {}
  createUser(req, res) {
    const new_user = new UserModel(req.body);
    new_user.save((err, user) => {
      if (err) {
        return res.status(400).send({
          message: err,
        });
      } else {
        new_user.password = undefined;
        return res.json(new_user);
      }
    });
  }
}

export default new UserController();

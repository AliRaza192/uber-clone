const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, password } = req.body;

  const hashPassword = await userModel.hashedPassword(password);
  const user = await userService.createUser({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashPassword,
  });

  const token =  user.generateAuthToken();
  res.status(201).json({ token, user });

  // Example response
  /*
  Example response:
  {
    "token": "your_jwt_token",
    "user": {
      "_id": "user_id",
      "fullName": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  */
};

const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const captainServie = require("../services/captain.service");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, password, vehicle } = req.body;

  const isCaptainExist = await captainModel.findOne({ email });

  if (isCaptainExist) {
    return res.status(400).json({ message: "Captain already exists" });
  }

  const hashPassword = await captainModel.hashedPassword(password);
  const captain = await captainServie.createCaptain({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();
  res.status(201).json({ token, captain });
};


// {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzgyNTBhOGQyOTNjZjEzZWExZjA3OWIiLCJpYXQiOjE3MzY1OTM1NzYsImV4cCI6MTczNjY3OTk3Nn0.9fMaiUMQQvBNxmTLladhUf7qUC8hmzORMqBX7xW02V4","captain":{"fullName":{"firstName":"test_firstName_captain","lastName":"test_lastName_captain"},"email":"testcaptain@test.com","password":"$2b$10$wOBhx6W0hGS4leXDe8FR..tKUJACQozDyykhPOpKMyFkydpivV3eu","status":"inactive","vehicle":{"color":"red","plate":"ABC 096 XYZ 2019","capacity":"4","vehicleType":"car"},"_id":"678250a8d293cf13ea1f079b","__v":0}}
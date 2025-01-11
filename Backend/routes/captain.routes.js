const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/register", [
  [
    body("email").isEmail().withMessage("Invalid Email!"),
    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("First Name must be at least 5 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters long"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 characters long"),
    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("capacity must be at least 1"),
  ],
  captainController.registerCaptain,
]);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email!"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  captainController.loginCaptain
);

router.get(
  "/profile",
  authMiddleware.authCaptain,
  captainController.getCaptainProfile
);

router.get(
  "/logout",
  authMiddleware.authCaptain,
  captainController.logoutCaptain
);



module.exports = router;

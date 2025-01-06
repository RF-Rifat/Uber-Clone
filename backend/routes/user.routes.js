const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("First name should be at least 3 characters long"),
    body("fullName.lastName")
      .isLength({ min: 3 })
      .withMessage("Last name should be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.register
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    userController.login,
  ],
  userController.login
);

router.get("/profile", authMiddleware, userController.getProfile);
router.get("/logout", authMiddleware, userController.logout);
module.exports = router;

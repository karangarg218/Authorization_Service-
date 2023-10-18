const express = require("express");
const UserController = require("../../controller/user-controller");
const { AuthRequestValidators } = require("../../middleware/index");
const router = express.Router();

router.post(
  "/signup",
  AuthRequestValidators.validateUserAuth,
  UserController.create
);
router.post(
  "/signIn",
  AuthRequestValidators.validateUserAuth,
  UserController.signIn
);
router.get("/isAuthenticated", UserController.isAuthenticated);
module.exports = router;

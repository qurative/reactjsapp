import express from "express";
import AuthController from './../../controllers/auth.controller';
const router = express.Router();
// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", AuthController.submitSignUp);

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", AuthController.submitLogin);

module.exports = router;

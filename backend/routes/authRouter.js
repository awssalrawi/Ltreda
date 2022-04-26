const express = require('express');
const router = express.Router();
const { signupWithEmailAndPassword } = require('../controllers/authController');
const { userSignUpValidator, runValidator } = require('../utilities/validator');
router.post(
  '/signup',
  userSignUpValidator,
  runValidator,
  signupWithEmailAndPassword
);

module.exports = router;

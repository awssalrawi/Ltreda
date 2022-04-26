const catchAsync = require('../utilities/catchAsync');
const User = require('../models/userModel');
const AppError = require('./../utilities/appError');

//* Signup user with email and password /api/v1/user/signup

exports.signupWithEmailAndPassword = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  //*Check if user is already exists
  const checkUser = await User.findOne({ email });
  if (checkUser) {
    console.log('before error');
    return next(
      new AppError(`there is already a user with this email : ${email}`, 400)
    );
  }
  //*I think I should change user schema method later
  await User.create({ name, email, password });

  res.status(201).json({
    success: true,
    message: 'Signup successfully, Please sign in',
  });
});

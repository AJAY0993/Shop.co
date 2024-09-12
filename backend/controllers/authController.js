const User = require('../models/User');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const genTokenSendResAndCookie = require('../utils/sendCookieAndToken');

const signUp = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return next(new AppError(400, 'Email is already registered'));
  }
  const newUser = await User.create(req.body);
  return genTokenSendResAndCookie(res, 201, 'Account created successfully', {
    user: newUser
  });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError(400, 'Please provide required credentials.'));
  }
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.isPasswordCorrect(password))) {
    return next(next(new AppError(401, 'Incorrect email or password.')));
  }
  user.password = undefined;
  return genTokenSendResAndCookie(res, 201, 'Logged in successfully', { user });
});

const logout = async (_, res) => {
  res.cookie('jwt', '');
  res.json({ status: 'success', message: 'Logged out successfully' });
};
module.exports = { signUp, login, logout };

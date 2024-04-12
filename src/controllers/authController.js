const jwt = require('jsonwebtoken')
const User = require('../models/User')
const catchAsync = require('../utils/catchAsync')
const genTokenSendResAndCookie = require('../utils/sendCookieAndToken')

const signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body)
  genTokenSendResAndCookie(res, 201, 'Account created successfully', newUser)
})

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    // send error
    return res.status(400).json({ message: 'Please provide password' })
  }
  const user = await User.findOne({ email }).select('+password')
  const isPasswordCorrect = await user.isPasswordCorrect(password)
  if (!user || !isPasswordCorrect) {
    // send error
    return res.json({
      message: 'wrong email or password'
    })
  }
  genTokenSendResAndCookie(res, 201, 'Logged in successfully', user)
})

const logout = async (req, res, next) => {
  res.cookie('jwt', '')
  res.end()
}
module.exports = { signUp, login, logout }

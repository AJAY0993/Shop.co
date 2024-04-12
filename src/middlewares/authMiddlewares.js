const { promisify } = require('util')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const catchAsync = require('../utils/catchAsync')

const isAuthenticated = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt
  if (!token) {
    res.json({
      message: 'Please provide required token'
    })
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
  const user = await User.findById(decoded.id)
  if (!user) {
    res.json({
      message: 'User not found'
    })
  }
  req.user = user
  next()
})

const isAuthorized =
  (...roles) =>
  (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next()
    } else {
      res.json({
        message: 'You are not authorized'
      })
    }
  }

module.exports = { isAuthenticated, isAuthorized }

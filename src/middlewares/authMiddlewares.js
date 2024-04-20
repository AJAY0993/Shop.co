/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
const { promisify } = require('util')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/AppError')

const isAuthenticated = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt
  if (!token) return next(new AppError(401, 'Please provide credentials'))
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
  const user = await User.findById(decoded.id)
  if (!user) return next(new AppError(401, 'User not found'))
  req.user = user
  return next()
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

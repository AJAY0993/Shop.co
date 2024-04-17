const User = require('../models/User')
const catchAsync = require('../utils/catchAsync')

const getMe = catchAsync(async (req, res) => {
  const me = await User.findById(req.user.id)
  res.status(200).json({
    status: 'success',
    message: `Welcome back ${me.username}`,
    data: {
      user: me
    }
  })
})

const updateMe = catchAsync(async (req, res) => {
  const me = await User.findByIdAndUpdate(req.user.id, req.body, {
    runValidators: true,
    new: true
  })
  res.status(200).json({
    status: 'success',
    message: 'Profile updated succesfully',
    data: {
      user: me
    }
  })
})

module.exports = { getMe, updateMe }

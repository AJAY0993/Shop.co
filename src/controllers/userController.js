const User = require('../models/User')
const catchAsync = require('../utils/catchAsync')

const getMe = catchAsync(async (req, res, next) => {
  const me = await User.findById(req.user.id)
  res.status(200).json({
    status: 'success',
    message: `Welcome back ${me.username}`,
    data: {
      user: me
    }
  })
})

module.exports = { getMe }

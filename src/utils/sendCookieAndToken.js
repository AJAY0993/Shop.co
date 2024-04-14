const jwt = require('jsonwebtoken')

const genTokenSendResAndCookie = (res, statusCode, message, data) => {
  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign({ id: data.user._id }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24 * 30
  })
  const cookieOptions = {
    httpOnly: true,
    secure: false,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 30
  }
  if (process.env.NODE_ENV === 'production') {
    cookieOptions.secure = true
  }
  res.cookie('jwt', token)
  res.status(statusCode).json({
    status: 'successfull',
    message,
    data
  })
}

module.exports = genTokenSendResAndCookie

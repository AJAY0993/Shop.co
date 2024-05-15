const AppError = require('../utils/AppError')

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`
  return new AppError(400, message)
}

const handleDuplicateFieldsDB = (err) => {
  const value = Object.keys(err.keyValue)[0]
  const message = `Duplicate field value: ${value}. Please use another value!`
  return new AppError(400, message)
}

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message)

  const message = `Invalid input data. ${errors.join('. ')}`
  return new AppError(400, message)
}

const handleJWTError = () =>
  new AppError(401, 'Invalid token. Please log in again!')

const handleJWTExpiredError = () =>
  new AppError(401, 'Your token has expired! Please log in again.')

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  })
}

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    })

    // Programming or other unknown error: don't leak error details
  } else {
    // 1) Log error
    console.error('ERROR 💥', err)

    // 2) Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong!'
    })
  }
}

module.exports = (runTimeError, req, res, next) => {
  const err = { ...runTimeError }
  err.statusCode = runTimeError.statusCode || 500
  err.status = runTimeError.status || 'error'
  err.message = runTimeError.message
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res)
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err }
    if (err.name === 'CastError') error = handleCastErrorDB(error)
    if (err.code === 11000) error = handleDuplicateFieldsDB(error)
    if (err.name === 'ValidationError') error = handleValidationErrorDB(error)
    if (err.name === 'JsonWebTokenError') error = handleJWTError()
    if (err.name === 'TokenExpiredError') error = handleJWTExpiredError()
    sendErrorProd(error, res)
  }
}

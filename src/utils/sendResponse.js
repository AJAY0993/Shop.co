const sendResponse = (res, statusCode, message, data) => {
  res.status(statusCode).json({
    status: 'successfull',
    message,
    data
  })
}

module.exports = sendResponse

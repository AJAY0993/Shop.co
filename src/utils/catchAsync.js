const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => res.send(err))
}

module.exports = catchAsync

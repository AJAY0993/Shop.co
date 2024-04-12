const fixQuery = (req, res, next) => {
  if (req.query.price) {
    req.query['price.current.value'] = req.query.price
    delete req.query.price
  }
  next()
}

module.exports = { fixQuery }

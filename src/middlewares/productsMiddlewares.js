const fixQuery = (req, res, next) => {
  if (req.query.price) {
    req.query['price.current.value'] = req.query.price
    delete req.query.price
  }
  if (req.query.rating) {
    req.query['rating.rate'] = req.query.rating
    delete req.query.rating
  }
  next()
}

module.exports = { fixQuery }

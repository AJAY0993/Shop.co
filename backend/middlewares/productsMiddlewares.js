const fixQuery = (req, res, next) => {
  if (req.query.price) {
    req.query['price.current.value'] = req.query.price
    delete req.query.price
  }
  if (req.query.rating) {
    req.query['rating.rate'] = req.query.rating
    delete req.query.rating
  }
  if (req.query.discount) {
    req.query['price.current.discount'] = req.query.discount
    delete req.query.discount
  }
  next()
}

module.exports = { fixQuery }

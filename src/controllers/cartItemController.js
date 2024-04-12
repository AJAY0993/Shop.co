const CartItem = require('../models/CartItem')
const catchAsync = require('../utils/catchAsync')

const createCartItem = catchAsync(async (req, res, next) => {
  const item = await CartItem.create(req.body)
})

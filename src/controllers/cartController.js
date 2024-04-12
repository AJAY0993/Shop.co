const Cart = require('../models/Cart')
const catchAsync = require('../utils/catchAsync')
const sendResponse = require('../utils/sendResponse')

const getCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.findById(req.params.id)
  sendResponse(res, 200, 'Cart fetched successfully', cart)
})

const addToCart = catchAsync(async (req, res, next) => {})

module.exports = { getCart, addToCart }

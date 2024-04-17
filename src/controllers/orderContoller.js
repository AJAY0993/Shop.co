const Order = require('../models/Order')
const ApiFeatures = require('../utils/apiFeatures')
const catchAsync = require('../utils/catchAsync')

const getOrders = catchAsync(async (req, res) => {
  const orederFeatures = new ApiFeatures(Order.find(), req.query)
  const orders = await orederFeatures.query
  res.json({
    status: 'success',
    message: 'orders fetched successfully',
    data: {
      orders
    }
  })
})

const getMyOrders = catchAsync(async (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const orders = await Order.find({ customer: req.user._id })
  res.json({
    status: 'success',
    message: 'orders fetched successfully',
    data: {
      orders
    }
  })
})

const getOrderById = catchAsync(async (req, res) => {
  const order = await Order.findById(req.params.id)
  res.json({
    status: 'success',
    message: 'order fetched successfully',
    data: {
      order
    }
  })
})

const cancelOrder = catchAsync(async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    {
      status: 'cancelled'
    },
    { new: true }
  )
  res.json({
    status: 'success',
    message: 'orders cancelled successfully',
    data: {
      order
    }
  })
})
module.exports = {
  getOrders,
  getOrderById,
  getMyOrders,
  cancelOrder
}

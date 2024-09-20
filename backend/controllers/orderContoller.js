/* eslint-disable no-underscore-dangle */
const Order = require('../models/Order')
const ApiFeatures = require('../utils/apiFeatures')
const catchAsync = require('../utils/catchAsync')
const OrderDetail = require('../models/OrderDetails')
const AppError = require('../utils/AppError')

const getOrders = catchAsync(async (req, res) => {
  const orederFeatures = new ApiFeatures(Order.find(), req.query)
  const orders = await orederFeatures.query
  return res.json({
    status: 'success',
    message: 'orders fetched successfully',
    data: {
      orders
    }
  })
})

const getMyOrders = catchAsync(async (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const orders = await Order.find({
    customer: req.user._id,
    status: { $ne: 'pending' }
  })
  return res.json({
    status: 'success',
    message: 'orders fetched successfully',
    data: {
      orders
    }
  })
})

const getOrderById = catchAsync(async (req, res, next) => {
  const order = await Order.findById(req.params.id)
  if (!order) return next(new AppError(400, 'No order found'))
  const orderDetails = await OrderDetail.find({ orderId: order._id })
  return res.json({
    status: 'success',
    message: 'order fetched successfully',
    data: {
      order,
      orderItems: orderDetails
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
  return res.json({
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

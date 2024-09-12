const express = require('express')
const {
  isAuthorized,
  isAuthenticated
} = require('../middlewares/authMiddlewares')
const {
  getOrderById,
  getMyOrders,
  getOrders
} = require('../controllers/orderContoller')

const orderRouter = express.Router()

orderRouter.route('/').get(isAuthorized('admin'), getOrders)

orderRouter.route('/me').get(isAuthenticated, getMyOrders)

orderRouter.route('/:id').get(getOrderById)

module.exports = orderRouter

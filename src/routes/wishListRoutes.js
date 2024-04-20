const express = require('express')
const wishListController = require('../controllers/wishListController')
const { isAuthenticated } = require('../middlewares/authMiddlewares')

const wishListRouter = express.Router()

wishListRouter.use(isAuthenticated)

wishListRouter
  .route('/')
  .get(wishListController.getWishList)
  .patch(wishListController.addToWishList)
  .delete(wishListController.removeFromWishList)

module.exports = wishListRouter

const express = require('express')
const reviewController = require('../controllers/reviewController')
const { isAuthenticated } = require('../middlewares/authMiddlewares')

const reviewRouter = express.Router({ mergeParams: true })

reviewRouter.use(isAuthenticated)

reviewRouter
  .route('/')
  .get(reviewController.getReviews)
  .post(isAuthenticated, reviewController.createReview)

reviewRouter.route('/reviewId').delete(reviewController.deleteReview)

module.exports = reviewRouter

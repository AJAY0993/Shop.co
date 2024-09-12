const Review = require('../models/Review')
const catchAsync = require('../utils/catchAsync')

const getReviews = catchAsync(async (req, res) => {
  if (req.params.productId) {
    req.body.productId = req.params.productId
  }
  const { productId } = req.body
  const productReviews = await Review.find({ product: productId })

  res.status(200).json({
    status: 'success',
    message: 'Reviews fethed successfully',
    data: {
      reviews: productReviews
    }
  })
})

const createReview = catchAsync(async (req, res) => {
  if (req.params.productId) {
    req.body.productId = req.params.productId
  }
  const { review, productId } = req.body
  // eslint-disable-next-line no-underscore-dangle
  const userId = req.user._id
  const newReview = await Review.create({
    user: userId,
    product: productId,
    review
  })
  res.status(201).json({
    status: 'success',
    message: 'Reviews created successfully',
    data: {
      review: newReview
    }
  })
})

const deleteReview = catchAsync(async (req, res) => {
  await Review.findByIdAndDelete(req.params.id)
  res.status(204).json({
    status: 'success',
    message: 'Reviews deleted successfully'
  })
})

module.exports = { getReviews, createReview, deleteReview }

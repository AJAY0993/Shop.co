const mongoose = require('mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema

const reviewSchema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: 'User',
      required: [true, 'Please provide user information']
    },
    product: {
      type: ObjectId,
      ref: 'User'
    },
    review: {
      type: String
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 3
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: {
      virtuals: true
    }
  }
)

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'username'
  })
  next()
})
const Review = mongoose.model('Review', reviewSchema)

module.exports = Review

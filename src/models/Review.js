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
    select: 'name profilePic'
  })
  next()
})
const Review = mongoose.model('Review', reviewSchema)

module.exports = Review

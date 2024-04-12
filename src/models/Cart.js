const mongoose = require('mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema

const cartSchema = new Schema(
  {
    items: {
      type: [
        {
          type: ObjectId,
          ref: 'CartItem'
        }
      ],
      default: []
    },
    name: String,
    user: {
      type: ObjectId,
      ref: 'User'
    }
  },
  {
    toObject: true,
    toJSON: true
  }
)

cartSchema.virtual('amount').get(function () {
  return this.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
})

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart

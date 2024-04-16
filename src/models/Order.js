const mongoose = require('mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema

const orderSchema = new Schema({
  customer: {
    type: ObjectId,
    ref: 'User'
  },
  items: {
    type: [
      {
        product: { type: ObjectId, ref: 'Product' },
        quantity: Number
      }
    ]
  },
  totalAmount: {
    type: Number
  },
  shippingAdderess: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['card', 'credit card', 'debit card', 'paypal', 'UPI']
  }
})

orderSchema.pre(/^find/, async function (next) {
  this.populate({
    path: 'customer',
    select: '_id username profilePic '
  })
  this.populate({
    path: 'items.product',
    select: '_id name imageUrl price'
  })
  next()
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order

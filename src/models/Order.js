const mongoose = require('mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema

const orderSchema = new Schema({
  customer: {
    type: ObjectId,
    ref: 'User'
  },
  items: {
    type: [{ product: ObjectId, ref: 'Product' }]
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
    enum: ['credit card', 'debit card', 'paypal', 'UPI']
  }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order

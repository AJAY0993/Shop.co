const mongoose = require('mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema

const orderSchema = new Schema(
  {
    customer: {
      type: ObjectId,
      ref: 'User'
    },
    shippingAdderess: {
      type: String
    },
    mobileNumber: String,
    status: {
      type: String,
      enum: [
        'pending',
        'confirmed',
        'cancelled',
        'returned',
        'processing',
        'dispatching',
        'shipped',
        'delivered',
        'aborted'
      ],
      default: 'pending'
    },
    paymentMethod: {
      type: String,
      enum: ['card', 'credit card', 'debit card', 'paypal', 'UPI'],
      default: 'card'
    }
  },
  {
    timestamps: true
  }
)

// orderSchema.pre('findOne', function (next) {
//   Check if the query is for an _id (which findById uses)
//   if (Object.prototype.hasOwnProperty.call(this.getQuery(), '_id')) {
//   }
//   next();
// });

const Order = mongoose.model('Order', orderSchema)
module.exports = Order

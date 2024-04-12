const mongoose = require('mongoose')
const Product = require('mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema

const cartItemSchema = new Schema({
  product: { type: ObjectId, ref: 'Product' },
  name: { type: String },
  color: {
    type: String
  },
  size: {
    size: String,
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  imageUrl: {
    type: String
  },
  quantity: {
    type: Number,
    default: 1
  },
  price: {
    type: Number,
    default: 0
  },
  totalPrice: {
    type: Number
  }
})

cartItemSchema.pre('save', async function (next) {
  const product = await Product.findByid(this.product)
  this.price = product.price.current.value
  next()
})

cartItemSchema.pre('*', function (next) {
  this.totalPrice = this.price * this.quantity
  next()
})

const CartItem = mongoose.model('CartItem', cartItemSchema)
module.exports = CartItem

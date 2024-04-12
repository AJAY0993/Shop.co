const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Cart = require('./Cart')

const { Schema } = mongoose
const { ObjectId } = Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: [true]
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: [true, 'Email already exist'],
    validate: {
      validator: (value) => validator.isEmail(value),
      message: 'Please provide  a valid email'
    }
  },
  cart: { type: ObjectId, ref: 'Cart' },
  isPremium: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    minLength: [8, 'Password must be 8 character long'],
    maxLength: [20, 'Password can not be longer than 20 charactetrs'],
    select: false
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please provide confirm password'],
    validate: {
      validator(value) {
        return value === this.password
      },
      message: 'Passwords do not match'
    }
  }
})

userSchema.methods.isPasswordCorrect = async function (plainPassword) {
  const result = await bcrypt.compare(plainPassword, this.password)
  return result
}

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  this.confirmPassword = undefined

  const cart = await Cart.create({
    user: this._id,
    name: `${this.username}'s cart`
  })
  this.cart = cart._id
  next()
})

const User = mongoose.model('User', userSchema)
module.exports = User

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

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
  profilePic: {
    type: String,
    default: 'https://i.ibb.co/mBXRT6g/profile-user.png'
  },
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
  console.log('from is password correct')
  const result = await bcrypt.compare(plainPassword, this.password)
  return result
}

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  this.confirmPassword = undefined
  next()
})

const User = mongoose.model('User', userSchema)
module.exports = User

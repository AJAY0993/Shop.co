const mongoose = require('mongoose')

const { Schema } = mongoose

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    subCategory: {
      type: String
    },
    brandName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: true
    },
    color: {
      type: String
    },
    price: {
      currency: {
        type: String,
        required: true
      },
      current: {
        text: {
          type: String,
          required: true
        },
        value: {
          type: Number,
          required: true
        },
        discount: {
          type: Number,
          default: 0
        }
      }
    },
    imageUrl: {
      type: String,
      required: true
    },
    additionalImageUrls: {
      type: [String],
      required: true
    },
    isSellingFast: {
      type: Boolean,
      default: false
    },
    url: {
      type: String
    }
  },
  {
    toJSON: true,
    toObject: true
  }
)

productSchema.virtual('discountedPrice').get(function () {
  return this.price.current.value - this.price.current.discount / 100
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product

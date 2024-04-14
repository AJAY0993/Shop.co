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
    rating: {
      rate: {
        type: Number,
        default: 0
      },
      count: {
        type: Number,
        default: 0
      }
    },
    url: {
      type: String
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

productSchema.index({
  name: 'text',
  category: 'text',
  brandName: 'text',
  description: 'text'
})

productSchema.virtual('discountedPrice').get(function () {
  return this.price.current.value - this.price.current.discount / 100
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product

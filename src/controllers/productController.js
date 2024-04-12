const Product = require('../models/Product')
const ApiFeatures = require('../utils/apiFeatures')
const catchAsync = require('../utils/catchAsync')
const sendResponse = require('../utils/sendResponse')

const getAllProducts = catchAsync(async (req, res, next) => {
  const query = Product.find().select('name imageUrl price rating')
  const featuredQuery = new ApiFeatures(query, req.query)
    .filter()
    .sort()
    .limit()
    .paginate()
  const products = await featuredQuery.query
  sendResponse(res, 200, 'Prodcuts fetched successfully', { products })
})

const getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  sendResponse(res, 200, 'Prodcut fetched successfully', { product })
})

module.exports = { getAllProducts, getProduct }

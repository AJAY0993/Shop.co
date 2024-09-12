const Product = require('../models/Product')
const ApiFeatures = require('../utils/apiFeatures')
const catchAsync = require('../utils/catchAsync')
const sendResponse = require('../utils/sendResponse')

const createProduct = catchAsync(async (req, res) => {
  const newProduct = await Product.create(req.body)
  sendResponse(res, 200, 'Prodcut fetched successfully', {
    product: newProduct
  })
})

const getAllProducts = catchAsync(async (req, res) => {
  const query = Product.find().select(
    'name imageUrl price rating additionalImageUrls rating'
  )
  const featuredQuery = new ApiFeatures(query, req.query)
    .filter()
    .sort()
    .limit()
    .paginate()
  const products = await featuredQuery.query
  sendResponse(res, 200, 'Prodcuts fetched successfully', { products })
})

const getProduct = catchAsync(async (req, res) => {
  const product = await Product.findById(req.params.id)
  sendResponse(res, 200, 'Prodcut fetched successfully', { product })
})

const searchProduct = catchAsync(async (req, res) => {
  const { query } = req.params

  const products = await Product.find({ $text: { $search: query } })
    .select('name _id imageUrl')
    .limit(8)

  sendResponse(res, 200, 'Prodcut fetched successfully', { products })
  res.end()
})

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  searchProduct
}

const express = require('express')
const productController = require('../controllers/productController')
const { fixQuery } = require('../middlewares/productsMiddlewares')
const reviewRouter = require('./reviewRoutes')

const router = express.Router()

router.get('/', fixQuery, productController.getAllProducts)
router.get('/s/:query', fixQuery, productController.searchProduct)

router.use('/:productId/reviews', reviewRouter)

router.get('/:id', fixQuery, productController.getProduct)

module.exports = router

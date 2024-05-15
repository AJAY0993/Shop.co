const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const productRouter = require('./routes/productRoutes')
const userRouter = require('./routes/userRoutes')
const handleError = require('./middlewares/globalErrorMiddleware')
const orderRouter = require('./routes/orderRoutes')
const wishListRouter = require('./routes/wishListRoutes')
const AppError = require('./utils/AppError')
const stripe = require('./services/stripe')
const { isAuthenticated } = require('./middlewares/authMiddlewares')
const reviewRouter = require('./routes/reviewRoutes')

dotenv.config({ path: '../.env' })
const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true
  })
)
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('public'))

app.use('/api/v1/products', productRouter)
app.use('/api/v1/reviews', reviewRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/wishlist', wishListRouter)
app.use('/api/v1/checkout', isAuthenticated, stripe.checkoutService)
app.post(
  '/webhook',
  express.json({ type: 'application/json' }),
  stripe.webhookHandler
)
app.post('/stripe-checkout', isAuthenticated, stripe.checkoutService)

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})
app.all('*', (req, res, next) => {
  next(new AppError(404, `${req.originalUrl} not found `))
})

app.use(handleError)
module.exports = app

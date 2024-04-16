const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const productRouter = require('./routes/productRoutes')
const userRouter = require('./routes/userRoutes')
const handleError = require('./middlewares/globalErrorMiddleware')
const orderRouter = require('./routes/orderRoutes')
const AppError = require('./utils/AppError')
const checkoutService = require('./services/stripe')
const { isAuthenticated } = require('./middlewares/authMiddlewares')

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
// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     cors({
//       origin: true,
//       methods: 'GET',
//       credentials: true,
//     })(req, res, next)
//   } else {
//     cors({
//       origin: (origin, cb) => {
//         if (!origin || origin.startsWith('http://localhost')) {
//           cb(null, true)
//         } else {
//           cb(new Error('Not Allowed'), null)
//         }
//       },
//       credentials: true,
//       methods: 'GET,POST,PUT,PATCH,DELETE',
//     })
//   }
//   next()
// })
// app.use((req, res, next) => {
//   res.on('finish', () => {
//     console.log('Response headers:', res.getHeaders())
//   })
//   next()
// })

app.use('/api/v1/products', productRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/checkout', isAuthenticated, checkoutService)

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})
app.all('*', (req, res, next) => {
  next(new AppError(404, `${req.originalUrl} not found `))
})

app.use(handleError)
module.exports = app

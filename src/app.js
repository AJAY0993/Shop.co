const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const productRouter = require('./routes/productRoutes')
const userRouter = require('./routes/userRoutes')

dotenv.config({ path: '../.env' })
const app = express()

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ credentials: true }))
app.use(morgan('tiny'))
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
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log('Response headers:', res.getHeaders())
  })
  next()
})

app.use('/api/v1/products', productRouter)
app.use('/api/v1/cart', productRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/users', userRouter)

module.exports = app

const app = require('./app')
const connectDB = require('./config/connectDb')

const PORT = process.env.PORT || 5000

connectDB().then(
  app.listen(PORT, () => {
    console.log('App is listening on port 3000')
  })
)

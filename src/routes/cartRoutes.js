const express = require('express')

const cartRouter = express.Router({ mergeParams: true })

cartRouter
  .route('/')
  .get((req, res) => res.send('cart'))
  .delete((req, res) => res.send('delete cart cart'))

cartRouter
  .route('/cart/:cartId/cartItems/:cartItemId/:opr')
  .get()
  .post()
  .delete()
  .update()

/* eslint-disable no-underscore-dangle */
require('dotenv').config({ path: '../../.env' })
const stripe = require('stripe')(
  'sk_test_51P4fQhSGowosMs9tvefZasqKK0RqNHJt1xKT1KXIaKoOUzJC37eZH5GzvHnsP0nZ2kXYgfvGIutRARP9gIPHO1jM00eaf5dfWV'
)
const Order = require('../models/Order')
const AppError = require('../utils/AppError')

const checkoutService = async (req, res, next) => {
  const tempOrder = {
    customer: req.user._id,
    items: req.body.items.map((item) => ({
      product: item._id,
      quantity: item.quantity
    })),
    shippingAdderess: req.body.shippingAdderess,
    paymentMethod: 'card'
  }
  let newOrder
  try {
    const { items } = req.body
    const itemsWithUnitPriceInPaise = items.map((item) => {
      const tempItem = { ...item }
      const discount = 1 - item.price.current.discount / 100
      tempItem.unitAmountInPaise = Math.round(
        item.price.current.value * discount * 100 * 84
      )
      return tempItem
    })

    const lineItems = itemsWithUnitPriceInPaise.map((item) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.name,
          images: [item.imageUrl]
        },
        unit_amount: item.unitAmountInPaise
      },
      quantity: item.quantity
    }))

    newOrder = await Order.create(tempOrder)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.protocol}://${req.get('host')}/order/${newOrder._id}`,
      cancel_url: 'http://localhost:5173/home'
    })

    tempOrder.totalAmount = await Order.findByIdAndUpdate(newOrder._id, {
      totalAmount: session.amount_total / 100 / 84
    })

    res.json({ status: 'success', data: { session } })
  } catch (err) {
    await Order.findByIdAndDelete(newOrder._id)
    next(
      new AppError(
        500,
        'Something went wrong while checking out please try again later'
      )
    )
  }
}
module.exports = checkoutService

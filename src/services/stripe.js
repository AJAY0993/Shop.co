require('dotenv').config({ path: '../../.env' })
const stripe = require('stripe')(
  'sk_test_51P4fQhSGowosMs9tvefZasqKK0RqNHJt1xKT1KXIaKoOUzJC37eZH5GzvHnsP0nZ2kXYgfvGIutRARP9gIPHO1jM00eaf5dfWV'
)

const checkoutService = async (req, res, next) => {
  console.log(process.env.STRIPE_KEY)
  const { items } = req.body
  const lineItems = items.map((item) => ({
    price_data: {
      currency: 'inr',
      product_data: {
        // name: item.name
        name: 'product'
        // image: item.imageUrl
      },
      unit_amount: Math.round(1 * 100)
    },
    quantity: item.quantity
  }))

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:5173/order',
    cancel_url: 'http://localhost:5173/home'
  })
  console.log(session)
  res.json({ status: 'success', data: { session } })
}
module.exports = checkoutService

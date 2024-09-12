/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);
const Order = require('../models/Order');
const AppError = require('../utils/AppError');
const OrderDetail = require('../models/OrderDetails');

const discountedPrice = (price) => {
  const pInCents = Number(price.current.value) * 100; //  Price in cents
  const p = pInCents; // Product price in cents
  const d = Number(price.current.discount); // Discount percentage
  return Math.floor(p - (p * d) / 100); // Discounted Price
};

const checkoutService = async (req, res, next) => {
  try {
    const { items, shippingAdderess } = req.body;
    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.name,
          images: [item.imageUrl]
        },
        unit_amount: discountedPrice(item.price)
      },
      quantity: item.quantity
    }));

    const newOrder = await Order.create({
      status: 'pending',
      shippingAdderess,
      customer: req.user.id,
      paymentMethod: 'card'
    });

    const promises = items.map(async (item) => {
      return await OrderDetail.create({
        orderId: newOrder._id,
        product: item.id || item._id,
        quantity: item.quantity
      });
    });

    await Promise.all(promises);

    // META DATA TO ADD PRODUCTS ON SUCCESS OF CHECKOUT
    const metadata = {
      orderId: newOrder._id.toString()
    };
    // NEW SESSION //
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:5173/me/myOrders' // Added http://
          : `${req.protocol}://${req.get('host')}/me/myOrders`,

      cancel_url: 'http://localhost:5173/home',
      metadata
    });

    res.json({ status: 'success', data: { session } });
  } catch (err) {
    console.log(err);
    next(
      new AppError(
        500,
        'Something went wrong while checking out please try again later'
      )
    );
  }
};

const webhookHandler = async (request, response) => {
  const endpointSecret = process.env.STRIPE_WEBHOOK_ENDPOINT_SECRET;
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.async_payment_failed':
      const checkoutSessionAsyncPaymentFailed = event.data.object;
      // Then define and call a function to handle the event checkout.session.async_payment_failed
      break;
    case 'checkout.session.async_payment_succeeded':
      // Then define and call a function to handle the event checkout.session.async_payment_succeeded
      console.log('session succeeded', body);
      break;
    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data.object;

      // Accessing the orderId from metadata
      const orderId = checkoutSessionCompleted.metadata.orderId;
      try {
        await Order.findByIdAndUpdate(orderId, {
          status: 'confirmed'
        });
      } catch (err) {
        console.log(`Some thing went wrong Order id${orderId}`);
      }
      // Then define and call a function to handle the event checkout.session.completed
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
};

module.exports = { webhookHandler, checkoutService };

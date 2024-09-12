const mongoose = require('mongoose');

const orderDetailsSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Order'
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product'
    },
    quantity: Number
  },
  {
    timestamps: true
  }
);

orderDetailsSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'product',
    select: 'name imageUrl price.current.value'
  });
  next();
});

const OrderDetail = mongoose.model('OrderDetail', orderDetailsSchema);
module.exports = OrderDetail;

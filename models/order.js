const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = require('./eventSchema');

const lineItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  event: eventSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function() {
  return this.qty * this.event.price;
});

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lineItems: [lineItemSchema],
  isPaid: { type: Boolean, default: false } 
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('orderQty').get(function() {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    { user: userId, isPaid: false },
    { user: userId },
    { upsert: true, new: true }
  );
};

orderSchema.methods.addItemToCart = async function (eventId) {
  const cart = this;
  const lineItem = cart.lineItems.find(lineItem => lineItem.event._id.equals(eventId));
  if (lineItem) {
    lineItem.qty += 1;
  } else {
    const Event = mongoose.model('Event');
    const event = await Event.findById(eventId);
    cart.lineItems.push({ event });
  }
  return cart.save();
};

orderSchema.methods.setItemQty = function(eventId, newQty) {
  const cart = this;
  const lineItem = cart.lineItems.find(lineItem => lineItem.event._id.equals(eventId));
  if (lineItem && newQty <= 0) {
    lineItem.deleteOne();
  } else if (lineItem) {
    lineItem.qty = newQty;
  }
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);

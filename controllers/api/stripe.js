const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const Order = require('../../models/order');

module.exports = {
    createCheckoutSession,
};

async function createPrices(lineItems) {
    const prices = await Promise.all(lineItems.map(async event => {
        console.log(event)
        const price = await stripe.prices.create({
            currency: 'usd',
            product_data: {
                name: event.event.title
            },
            unit_amount: event.event.price,
        });
        return {
            price: price.id,
            quantity: event.qty,
        };
    }));
    return prices;
}

async function createCheckoutSession(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    try {
        const lineItems = await createPrices(cart.lineItems);
        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.SERVER_URL}/success`,
            cancel_url: `${process.env.SERVER_URL}/cancel`
        })
        res.json({ url: session.url, cart })
    } catch (err) {
        console.log('ERROR OBJECT', err)
        res.status(500).json({ error: err.message})
    }
}

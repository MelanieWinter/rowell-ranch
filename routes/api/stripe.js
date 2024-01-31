const express = require('express');
const router = express.Router();
const stripeCtrl = require('../../controllers/api/stripe');

router.post('/create-checkout-session', stripeCtrl.createCheckoutSession)

module.exports = router;
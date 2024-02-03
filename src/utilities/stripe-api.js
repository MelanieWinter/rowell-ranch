import sendRequest from './send-request';
const BASE_URL = '/api/stripe'

export function handleCheckoutButton(lineItems) { 
    return sendRequest(`${BASE_URL}/create-checkout-session`, 'POST', { lineItems })
        .then(({ url }) => {
            console.log('api url', url)
            window.location = url;
        })
        .catch(error => {
            console.log(error)
            console.error('Checkout error:', error.message);
        });
}

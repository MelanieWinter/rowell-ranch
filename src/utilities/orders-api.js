import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addItemToCart(eventId) {
  return sendRequest(`${BASE_URL}/cart/events/${eventId}`, 'POST');
}

export function setItemQtyInCart(eventId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { eventId, newQty });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getOrders() {
  return sendRequest(`${BASE_URL}/user/orders`, 'GET');
}

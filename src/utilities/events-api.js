import sendRequest from './send-request'
const BASE_URL = '/api/events'

export async function getAllEvents() {
    return sendRequest (BASE_URL)
}
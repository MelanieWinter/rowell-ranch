import sendRequest from './send-request'
const BASE_URL = '/api/events'

export async function getAllEvents() {
    return sendRequest (BASE_URL)
}

export async function addEvent(formDataPayload) {
    return sendRequest(`${BASE_URL}`, 'POST', formDataPayload)
}

export async function deleteEvent(eventId) {
    console.log(eventId)
    return sendRequest(`${BASE_URL}/${eventId}`, 'DELETE')
}

export async function updateEvent(eventId, formDataPayload) {
    console.log(eventId)
    return sendRequest(`${BASE_URL}/${eventId}`, 'PUT', formDataPayload)
}
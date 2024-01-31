const mongoose = require('mongoose')

const eventSchema = require('./eventSchema')

module.exports = mongoose.model('Event', eventSchema)
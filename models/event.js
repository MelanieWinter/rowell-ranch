const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    title: {type: String},
    description: {type: String},
    recurring: {type: Boolean},
    date: {type: Date},
    price: {type: Number},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Event', eventSchema)
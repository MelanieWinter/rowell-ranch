const Event = require('../../models/event')

module.exports = {
    index,
    create,
    deleteEvent,
    updateEvent,
}

async function index(req, res) {
    const events = await Event.find({}).sort('title').exec()
    events.sort((a, b) => a.date - b.date)
    res.json(events)
}

async function create(req, res) {
    const event = await Event.create(req.body)
    res.json(event)
}

async function deleteEvent(req, res) {
    const event = await Event.findOneAndDelete({_id: req.params.id})
    res.json(event)
}

async function updateEvent(req, res) {
    const event = await Event.findOneAndUpdate({_id: req.params.id}, req.body)
    res.json(event)
}
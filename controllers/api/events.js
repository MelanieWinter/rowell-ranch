const Event = require('../../models/event')

module.exports = {
    index,
}

async function index(req, res) {
    const events = await Event.find({}).sort('title').exec()
    events.sort((a, b) => a.date - b.date)
    res.json(events)
}


const express = require('express');
const router = express.Router()
const eventsCtrl = require('../../controllers/api/events')

router.get('/', eventsCtrl.index)
router.post('/', eventsCtrl.create)
router.delete('/:id', eventsCtrl.deleteEvent)
router.put('/:id', eventsCtrl.updateEvent)


module.exports = router
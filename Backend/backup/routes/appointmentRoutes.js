const express = require('express');
const { createAppointment, confirmAppointment } = require('../controllers/appointmentController');

const router = express.Router();

router.post('/create', createAppointment);
router.put('/confirm/:id', confirmAppointment);

module.exports = router;

const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    confirmed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Appointment', appointmentSchema);

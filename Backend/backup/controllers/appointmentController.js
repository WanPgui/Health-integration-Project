const Appointment = require('../models/Appointment');
const { sendEmail } = require('../utils/emailService');

const createAppointment = async (req, res) => {
  try {
    const { date, time, doctor, patientEmail } = req.body;
    const newAppointment = new Appointment({ date, time, doctor, patientEmail });

    await newAppointment.save();

    sendEmail({
      to: patientEmail,
      subject: 'Appointment Confirmation',
      text: `Your appointment with Dr. ${doctor} is confirmed for ${date} at ${time}.`,
    });

    res.status(201).json({ message: 'Appointment created successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating appointment' });
  }
};

const confirmAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    await Appointment.findByIdAndUpdate(id, { status: 'Confirmed' });

    res.status(200).json({ message: 'Appointment confirmed' });
  } catch (error) {
    res.status(500).json({ message: 'Error confirming appointment' });
  }
};

module.exports = { createAppointment, confirmAppointment };


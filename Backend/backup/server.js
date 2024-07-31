const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const healthContentRoutes = require('./routes/healthContentRoutes');
const { sendEmail } = require('./utils/emailService');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/healthcontent', healthContentRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { 
 })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((error) => console.error('MongoDB connection error:', error));

    app.use(express.json());

    // Define API routes
    app.post('/api/contact', (req, res) => {
        const { name, email, message } = req.body;
        // Handle the request and send a response
        res.status(200).send('Message received');
    });
    
    app.post('/api/register', (req, res) => {
        const { name, email, password } = req.body;
        // Handle registration logic
        res.status(200).send('Registration successful');
    });
    
    app.post('/api/login', (req, res) => {
        const { email, password } = req.body;
        // Handle login logic
        res.status(200).send('Login successful');
    });
    
    app.post('/api/book', (req, res) => {
        const { name, email, date, time, doctor } = req.body;
        // Handle appointment booking logic
        res.status(200).send('Appointment booked');
    });
    
    // Start the server
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
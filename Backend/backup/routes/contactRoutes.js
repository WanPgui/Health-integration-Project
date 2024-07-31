const express = require('express');
const router = express.Router();
const { sendContactMessage } = require('../controllers/contactController'); // Make sure this import is correct

// Define the route
router.post('/contact', sendContactMessage);

module.exports = router;

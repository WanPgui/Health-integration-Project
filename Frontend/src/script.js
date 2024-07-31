// script.js

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Function to handle form submissions
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    // Add logic to handle form data here
}

// Add event listeners to forms
document.getElementById('contactForm').addEventListener('submit', handleSubmit);
document.getElementById('registerForm').addEventListener('submit', handleSubmit);
document.getElementById('loginForm').addEventListener('submit', handleSubmit);
document.getElementById('booking-form').addEventListener('submit', handleSubmit);
document.getElementById('health-record-form').addEventListener('submit', handleSubmit);

// Function to display health records chart
function displayHealthRecordsChart() {
    const ctx = document.getElementById('healthRecordsChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Label 1', 'Label 2', 'Label 3'],
            datasets: [{
                label: 'Health Records',
                data: [10, 20, 30],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Health Records'
            }
        }
    });
}

// Display health records chart
displayHealthRecordsChart();

// Function to handle appointment booking
function bookAppointment() {
    const patientName = document.getElementById('patient-name').value;
    const patientId = document.getElementById('patient-id').value;
    const appointmentTime = document.getElementById('appointment-time').value;
    console.log(`Booking appointment for ${patientName} with ID ${patientId} at ${appointmentTime}`);
    // Add logic to handle appointment booking here
}

// Add event listener to book appointment button
document.getElementById('booking-form').addEventListener('submit', bookAppointment);

// Function to handle health record update
function updateHealthRecord() {
    const patientId = document.getElementById('record-patient-id').value;
    const healthRecordContent = document.getElementById('health-record-content').value;
    console.log(`Updating health record for patient with ID ${patientId} with content: ${healthRecordContent}`);
    // Add logic to handle health record update here
}

// Add event listener to update health record button
document.getElementById('health-record-form').addEventListener('submit', updateHealthRecord);

// script.js

// Function to display on-screen notification
function displayNotification(message, type) {
    const notificationElement = document.getElementById('alert');
    notificationElement.innerHTML = message;
    notificationElement.className = `alert ${type}`;
    setTimeout(() => {
        notificationElement.className = 'alert';
    }, 3000); // Hide notification after 3 seconds
}

// Function to handle form submissions
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    // Add logic to handle form data here
    displayNotification('Form submitted successfully!', 'success');
}

// Add event listeners to forms
document.getElementById('contactForm').addEventListener('submit', handleSubmit);
document.getElementById('registerForm').addEventListener('submit', handleSubmit);
document.getElementById('loginForm').addEventListener('submit', handleSubmit);
document.getElementById('booking-form').addEventListener('submit', handleSubmit);
document.getElementById('health-record-form').addEventListener('submit', handleSubmit);

// Function to display health records chart
function displayHealthRecordsChart() {
    const ctx = document.getElementById('healthRecordsChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Label 1', 'Label 2', 'Label 3'],
            datasets: [{
                label: 'Health Records',
                data: [10, 20, 30],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Health Records'
            }
        }
    });
}

// Display health records chart
displayHealthRecordsChart();

// Function to handle appointment booking
function bookAppointment() {
    const patientName = document.getElementById('patient-name').value;
    const patientId = document.getElementById('patient-id').value;
    const appointmentTime = document.getElementById('appointment-time').value;
    console.log(`Booking appointment for ${patientName} with ID ${patientId} at ${appointmentTime}`);
    // Add logic to handle appointment booking here
    displayNotification('Appointment booked successfully!', 'success');
}

// Add event listener to book appointment button
document.getElementById('booking-form').addEventListener('submit', bookAppointment);

// Function to handle health record update
function updateHealthRecord() {
    const patientId = document.getElementById('record-patient-id').value;
    const healthRecordContent = document.getElementById('health-record-content').value;
    console.log(`Updating health record for patient with ID ${patientId} with content: ${healthRecordContent}`);
    // Add logic to handle health record update here
    displayNotification('Health record updated successfully!', 'success');
}

// Add event listener to update health record button
document.getElementById('health-record-form').addEventListener('submit', updateHealthRecord);

// Function to handle patient search
function searchPatient() {
    const patientName = document.getElementById('patient-search-input').value;
    console.log(`Searching for patient: ${patientName}`);
    // Add logic to handle patient search here
    displayNotification('Patient search results:', 'info');
}

// Add event listener to patient search button
document.getElementById('patient-search-button').addEventListener('click', searchPatient);

// Function to handle doctor search
function searchDoctor() {
    const doctorName = document.getElementById('doctor-search-input').value;
    console.log(`Searching for doctor: ${doctorName}`);
    // Add logic to handle doctor search here
    displayNotification('Doctor search results:', 'info');
}

// Add event listener to doctor search button
document.getElementById('doctor-search-button').addEventListener('click', searchDoctor);

// script.js
const { connectToDB, getPatientData, updatePatientData } = require('./db');

connectToDB();

// Get the patient data element
const patientData = document.getElementById("patient-data");

// Get the patient name element
const patientName = document.getElementById("patient-name");

// Get the patient age element
const patientAge = document.getElementById("patient-age");

// Get the patient gender element
const patientGender = document.getElementById("patient-gender");

// Get the update button element
const updateButton = document.getElementById("update-button");

// Load patient data from MongoDB
getPatientData().then(patientData => {
  patientName.textContent = patientData[0].name;
  patientAge.textContent = patientData[0].age;
  patientGender.textContent = patientData[0].gender;
});

// Add a click event listener to the update button
updateButton.addEventListener("click", () => {
  const updates = {
    name: "Jane Doe",
    age: 25,
    gender: "Female"
  };
  updatePatientData("patientId", updates);
});
// event creating
dp.onTimeRangeSelected = function (args) {
    var name = prompt("New event name:", "Event");
    dp.clearSelection();
    if (!name) return;
    var e = new DayPilot.Event({
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        resource: args.resource,
        text: name
    });
    dp.events.add(e);
    dp.message("Created");
};
// src/index.js
import './styles/styles.css';
import './script.js';

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

// Set the patient name
patientName.textContent = "John Doe";

// Set the patient age
patientAge.textContent = "30";

// Set the patient gender
patientGender.textContent = "Male";

// Add a click event listener to the update button
updateButton.addEventListener("click", () => {
  // Update the patient data
  patientName.textContent = "Jane Doe";
  patientAge.textContent = "25";
  patientGender.textContent = "Female";
});

// Function to display patient health records chart
const config = {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Patient Data Pie Chart'
      }
    }
  },
};

const patientDataPieChart = new Chart(
  document.getElementById('patientDataPieChart'),
  config
);

const data = {
  labels: ['Label 1', 'Label 2', 'Label 3'],
  datasets: [{
    label: 'Patient Data',
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
};
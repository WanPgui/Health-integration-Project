// patientData.js
const { getPatientData } = require('./db');

// Function to display patient health records chart
async function displayChart() {
  const patientData = await getPatientData();
  const chartData = patientData.map(patient => ({
    label: patient.name,
    data: [patient.healthRecord1, patient.healthRecord2, patient.healthRecord3],
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
  }));

  const config = {
    type: 'pie',
    data: chartData,
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
    }
  };

  const patientDataPieChart = new Chart(
    document.getElementById('pie-chart'),
    config
  );
}

displayChart();
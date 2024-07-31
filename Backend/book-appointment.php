<?php
// Connect to the database
$conn = mysqli_connect("localhost", "username", "password", "database");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve the posted data
$patientName = $_POST["patientName"];
$patientId = $_POST["patientId"];
$slotId = $_POST["slotId"];

// Query to book the appointment
$sql = "INSERT INTO booked_appointments (patient_name, patient_id, slot_id) VALUES ('$patientName', '$patientId', '$slotId')";
$result = mysqli_query($conn, $sql);

if ($result) {
    $response = array("success" => true, "message" => "Appointment booked successfully!");
} else {
    $response = array("success" => false, "error" => "Error booking appointment: " . mysqli_error($conn));
}

// Close the database connection
mysqli_close($conn);

// Output the response in JSON format
echo json_encode($response);
?>
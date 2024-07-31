<?php
// connect to database
$conn = mysqli_connect("localhost", "username", "password", "database");

// retrieve patient data
$sql = "SELECT patient_id, name, age, health_record FROM patients";
$result = mysqli_query($conn, $sql);

// create array to store patient data
$patients = array();

// loop through result and add to array
while ($row = mysqli_fetch_assoc($result)) {
    $patients[] = $row;
}

// close database connection
mysqli_close($conn);

// output patient data as JSON
echo json_encode($patients);
?>
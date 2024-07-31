<?php
// Connect to the database
$conn = mysqli_connect("localhost", "username", "password", "database");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Query to retrieve available slots
$sql = "SELECT * FROM available_slots";
$result = mysqli_query($conn, $sql);

// Create an array to store the available slots
$availableSlots = array();

while ($row = mysqli_fetch_assoc($result)) {
    $availableSlots[] = array(
        "id" => $row["id"],
        "start" => $row["start"],
        "end" => $row["end"],
        "text" => $row["text"]
    );
}

// Close the database connection
mysqli_close($conn);

// Output the available slots in JSON format
echo json_encode($availableSlots);
?>
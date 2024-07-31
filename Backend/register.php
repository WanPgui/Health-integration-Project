<?php
// Connect to the database
$conn = mysqli_connect("localhost", "username", "password", "database");

// Check connection
if (!$conn) {
    die("Connection failed: " + mysqli_connect_error());
}

// Retrieve the registration data from the request
$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];

// Hash the password
$passwordHash = password_hash($password, PASSWORD_BCRYPT);

// Insert the user into the database
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$passwordHash')";
if (mysqli_query($conn, $sql)) {
    echo json_encode(array("success" => true));
} else {
    echo json_encode(array("success" => false, "error" => "Error registering user."));
}

// Close the database connection
mysqli_close($conn);
?>
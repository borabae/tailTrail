<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $petName = $_POST["petName"];
    $petType = $_POST["petType"];
    // Retrieve other breed if "Other" option is selected
    $breed = ($_POST["petType"] === "other") ? $_POST["otherBreed"] : $_POST["breed"];
    $color = $_POST["color"];
    $age = $_POST["age"];
    $lastSeenLocation = $_POST["lastSeenLocation"];
    $contactMethod = $_POST["contactMethod"];
    $contactInfo = $_POST["contactInfo"];

    // Now you can store the data in a database or perform any other necessary actions
    // For example, you can insert the data into a MySQL database
    // Replace 'your_database_name', 'your_username', 'your_password', and 'your_table_name' with your actual database credentials and table name
    $conn = new mysqli('localhost', 'your_username', 'your_password', 'your_database_name');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO your_table_name (petName, petType, breed, color, age, lastSeenLocation, contactMethod, contactInfo)
            VALUES ('$petName', '$petType', '$breed', '$color', '$age', '$lastSeenLocation', '$contactMethod', '$contactInfo')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
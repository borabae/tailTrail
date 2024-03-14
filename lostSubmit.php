<?php
include 'database.php';

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['petName']);
    $species = $_POST['petType'];
    $breed = htmlspecialchars($_POST['breed']);
    $color = htmlspecialchars($_POST['lostColor']);
    $age = intval($_POST['petAge']);
    $last_seen_location = htmlspecialchars($_POST['lostLocation']);
    $last_seen_time = htmlspecialchars($_POST['lastSeenTime']);
    $additional_info = htmlspecialchars($_POST['additionalInfo']);
    $is_found = 0; // Since this is a lost pet report
    $date_reported = date("Y-m-d H:i:s"); // Current date and time
    $photo_url = htmlspecialchars($_POST['lostPetImage']);

    // Insert the lost pet record into the database
    if (insertLostPetRecord($name, $species, $breed, $color, $age, $last_seen_location, $last_seen_time, $additional_info, $is_found, $date_reported, $photo_url)) {
        echo "Lost pet record submitted successfully";
    } else {
        echo "Error submitting lost pet record";
    }
}

closeDatabaseConnection(); // Close the database connection
?>


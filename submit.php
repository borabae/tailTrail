<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process form data
    $petName = $_POST["petName"];
    $petType = $_POST["petType"];
    $lastSeenLocation = $_POST["lastSeenLocation"];
    $contactInfo = $_POST["contactInfo"];

    // Perform additional processing or database operations here

    // Redirect to a thank-you page or back to the form
    header("Location: thank-you.php");
    exit();
}
?>

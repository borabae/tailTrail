<?php
// Database connection details
$host = 'tail-trail-db.mysql.database.azure.com';
$db = 'tailtrial';
$user = 'ericliu';
$pass = 'Lhy54321..';
$ssl_ca = 'DigiCertGlobalRootCA.crt.pem';

// Initialize connection
$conn = mysqli_init();
if (!$conn) {
    die("mysqli_init failed");
}

mysqli_ssl_set($conn,NULL,NULL, $ssl_ca, NULL, NULL);

if (!mysqli_real_connect($conn, $host, $user, $pass, $db, 3306, NULL, MYSQLI_CLIENT_SSL)) {
    die('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $pet_name = htmlspecialchars($_POST['petName']);
    $pet_type = $_POST['petType']; // No need for sanitization as it's a dropdown
    $lost_gender = $_POST['lostGender']; // No need for sanitization as it's a dropdown
    $breed = htmlspecialchars($_POST['breed']);
    $lost_color = htmlspecialchars($_POST['lostColor']);
    $lost_location = htmlspecialchars($_POST['lostLocation']);
    $contact_method = $_POST['contactMethod']; // No need for sanitization as it's a dropdown
    $contact_info = htmlspecialchars($_POST['contactInfo']);

    // SQL query to insert data into the database
    $sql = "INSERT INTO lost_pets (pet_name, pet_type, lost_gender, breed, lost_color, lost_location, contact_method, contact_info) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    // Prepare the SQL statement
    $stmt = $conn->prepare($sql);

    // Bind parameters and execute the statement
    $stmt->bind_param("ssssssss", $pet_name, $pet_type, $lost_gender, $breed, $lost_color, $lost_location, $contact_method, $contact_info);

    if ($stmt->execute()) {
        echo "<p>New record created successfully</p>";
    } else {
        echo "<p>Error: " . $stmt->error . "</p>";
    }

    $stmt->close();
}

$conn->close();
?>

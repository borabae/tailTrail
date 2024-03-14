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

mysqli_ssl_set($conn, NULL, NULL, $ssl_ca, NULL, NULL);

if (!mysqli_real_connect($conn, $host, $user, $pass, $db, 3306, NULL, MYSQLI_CLIENT_SSL)) {
    die('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
}

// Function to insert a lost pet record into the database
function insertLostPetRecord($name, $species, $breed, $color, $age, $last_seen_location, $last_seen_time, $additional_info, $is_found, $date_reported, $photo_url) {
    global $conn;

    $sql = "INSERT INTO pets (name, species, breed, color, age, last_seen_location, last_seen_time, additional_info, is_found, date_reported, photo_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssisssiss", $name, $species, $breed, $color, $age, $last_seen_location, $last_seen_time, $additional_info, $is_found, $date_reported, $photo_url);

    if ($stmt->execute()) {
        return true;
    } else {
        return false;
    }
}

// Function to fetch all lost pets from the database
function getAllLostPets() {
    global $conn;

    $sql = "SELECT * FROM pets WHERE is_found = 0";
    $result = $conn->query($sql);

    $lostPets = [];

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $lostPets[] = $row;
        }
    }

    return $lostPets;
}

// Close the database connection
function closeDatabaseConnection() {
    global $conn;
    $conn->close();
}
?>

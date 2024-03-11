// script.js

// JavaScript function to populate lost pets gallery
function populateLostPetsGallery() {
    var lostPetsGallery = document.getElementById("lostPetsGallery");

    // Sample array of image URLs (replace with your actual image URLs)
    var lostPetImages = [
        "path/to/image1.jpg",
        "path/to/image2.jpg",
        "path/to/image3.jpg",
        // Add more image URLs as needed
    ];

    // Loop through the array of image URLs and create <img> elements for each
    lostPetImages.forEach(function(imageUrl) {
        // Create new <img> element
        var imgElement = document.createElement("img");

        // Set image source
        imgElement.src = imageUrl;

        // Append <img> element to the gallery container
        lostPetsGallery.appendChild(imgElement);
    });
}

// Call the function to populate the gallery when the page loads
window.onload = populateLostPetsGallery;

// JavaScript code to handle form submission
var lostPetForm = document.getElementById("lostPetForm");

lostPetForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    var petName = document.getElementById("petName").value;
    var petImage = document.getElementById("petImage").files[0];

    // Add logic to handle form data (e.g., submit via AJAX, etc.)
    console.log("Pet Name:", petName);
    console.log("Pet Image:", petImage);
});

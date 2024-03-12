// script.js

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

// script.js

// JavaScript code to handle form submission for Lost Pet Form
var lostPetForm = document.getElementById("lostPetForm");

lostPetForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    var petName = document.getElementById("petName").value;
    var petType = document.getElementById("petType").value;
    var lastSeenLocation = document.getElementById("lastSeenLocation").value;
    var contactInfo = document.getElementById("contactInfo").value;

    // Add logic to handle form data (e.g., submit via AJAX, etc.)
    console.log("Pet Name:", petName);
    console.log("Pet Type:", petType);
    console.log("Last Seen Location:", lastSeenLocation);
    console.log("Contact Information:", contactInfo);
});

document.getElementById("petType").addEventListener("change", function() {
    var otherPetTypeInput = document.getElementById("otherPetType");
    if (this.value === "other") {
        otherPetTypeInput.style.display = "block"; // Show the input field
    } else {
        otherPetTypeInput.style.display = "none"; // Hide the input field
    }
});

// JavaScript code to handle form submission for Found Pet Form
var foundPetForm = document.getElementById("foundPetForm");

foundPetForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    var foundPetName = document.getElementById("foundPetName").value;
    var foundPetType = document.getElementById("foundPetType").value;
    var foundLocation = document.getElementById("foundLocation").value;
    var finderContactInfo = document.getElementById("finderContactInfo").value;

    // Add logic to handle form data (e.g., submit via AJAX, etc.)
    console.log("Found Pet Name:", foundPetName);
    console.log("Found Pet Type:", foundPetType);
    console.log("Found Location:", foundLocation);
    console.log("Finder Contact Information:", finderContactInfo);
});

document.getElementById("foundPetType").addEventListener("change", function() {
    var otherFoundPetTypeInput = document.getElementById("otherFoundPetType");
    if (this.value === "other") {
        otherFoundPetTypeInput.style.display = "block"; // Show the input field
    } else {
        otherFoundPetTypeInput.style.display = "none"; // Hide the input field
    }
});



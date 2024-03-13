document.addEventListener("DOMContentLoaded", function() {
    // JavaScript code to handle form submission for Lost Pet Form
    var lostPetForm = document.getElementById("lostPetForm");

    lostPetForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form data
        var petName = document.getElementById("petName").value;
        var petType = document.getElementById("lostPetType").value;
        var lastSeenLocation = document.getElementById("lastSeenLocation").value;
        var contactInfo = document.getElementById("contactInfo").value;

        // Add logic to handle form data (e.g., submit via AJAX, etc.)
        console.log("Pet Name:", petName);
        console.log("Pet Type:", petType);
        console.log("Last Seen Location:", lastSeenLocation);
        console.log("Contact Information:", contactInfo);
    });

    // Show/hide other pet type input based on selection
    document.getElementById("lostPetType").addEventListener("change", function() {
        var otherPetTypeInput = document.getElementById("otherPetType");
        otherPetTypeInput.style.display = (this.value === "other") ? "block" : "none";
    });

    // Static breed options for each species
    var breedOptions = {
        dog: ["Labrador Retriever", "Border Collie", "Staffordshire Bull Terrier", "Cavalier King Charles Spaniel", "Golden Retriever"],
        cat: ["Domestic Shorthair", "Domestic Longhair", "Burmese", "Ragdoll", "Siamese"],
        bird: ["Budgerigar", "Cockatiel", "Bourke's Parrot", "Rainbow Lorikeet", "Galah"]
    };

    // Function to populate breed dropdown based on selected species
    document.getElementById("lostPetType").addEventListener("change", function() {
        var species = this.value;
        var breedsDropdown = document.getElementById("petBreed");

        // Clear existing options
        breedsDropdown.innerHTML = "<option value=''>Select a breed</option>";

        // Populate breed options based on selected species
        breedOptions[species].forEach(function(breed) {
            var option = document.createElement("option");
            option.value = breed;
            option.textContent = breed;
            breedsDropdown.appendChild(option);
        });
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

    // Show/hide other found pet type input based on selection
    document.getElementById("foundPetType").addEventListener("change", function() {
        var otherFoundPetTypeInput = document.getElementById("otherFoundPetType");
        otherFoundPetTypeInput.style.display = (this.value === "other") ? "block" : "none";
    });

});

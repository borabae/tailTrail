document.addEventListener("DOMContentLoaded", function() {
    // Function to open login pop-up when the login button is clicked
    document.getElementById("loginBtn").addEventListener("click", function() {
        document.getElementById("loginPopup").style.display = "block";
    });

    // Function to open registration pop-up when the registration button is clicked
    document.getElementById("registerBtn").addEventListener("click", function() {
        document.getElementById("registerPopup").style.display = "block";
    });

    // Function to close pop-up
    function closePopup(popupId) {
        document.getElementById(popupId).style.display = "none";
    }

    // Function to handle form submission (login)
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        // Handle login form submission here (e.g., via AJAX)
        // After successful login, you can redirect the user or perform other actions
        closePopup("loginPopup"); // Close the login pop-up
    });

    // Function to handle form submission (registration)
    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        // Handle registration form submission here (e.g., via AJAX)
        // After successful registration, you can redirect the user or perform other actions
        closePopup("registerPopup"); // Close the registration pop-up
    });

    // JavaScript code to handle form submission for Lost Pet Form
    var lostPetForm = document.getElementById("lostPetForm");

    lostPetForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form data
        var petName = document.getElementById("petName").value;
        var petType = document.getElementById("lostPetType").value;
        var lastSeenLocation = document.getElementById("lostLocation").value;
        var contactInfo = document.getElementById("contactInfo").value;

        // Add logic to handle form data (e.g., submit via AJAX, etc.)
        console.log("Pet Name:", petName);
        console.log("Pet Type:", petType);
        console.log("Last Seen Location:", lastSeenLocation);
        console.log("Contact Information:", contactInfo);

        // Display the popup
        displayPopup();
    });

    // Show/hide other pet type input based on selection
    var lostPetTypeInput = document.getElementById("lostPetType");
    lostPetTypeInput.addEventListener("change", function() {
        // Call the function to populate the breed dropdown when the pet type changes
        var selectedSpecies = this.value;
        console.log("Selected Species:", selectedSpecies);
        populateBreedDropdown(selectedSpecies);
    });

    // Call the function to populate breed dropdown when the page loads
    populateBreedDropdown(lostPetTypeInput.value);

    // JavaScript code to handle form submission for Found Pet Form
    var foundPetForm = document.getElementById("foundPetForm");

    foundPetForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form data
        var foundPetName = document.getElementById("foundPetName").value;
        var foundPetType = document.getElementById("foundPetType").value;
        var foundLocation = document.getElementById("foundLocation").value;
        var finderContactInfo = document.getElementById("foundContactInfo").value;

        // Add logic to handle form data (e.g., submit via AJAX, etc.)
        console.log("Found Pet Name:", foundPetName);
        console.log("Found Pet Type:", foundPetType);
        console.log("Found Location:", foundLocation);
        console.log("Finder Contact Information:", finderContactInfo);

        // Display the popup
        displayPopup();
    });

    // Show/hide other found pet type input based on selection
    var foundPetTypeInput = document.getElementById("foundPetType");
    foundPetTypeInput.addEventListener("change", function() {
        var otherFoundPetTypeInput = document.getElementById("otherFoundPetType");
        otherFoundPetTypeInput.style.display = (this.value === "other") ? "block" : "none";
        // Call the function to populate the breed dropdown when the pet type changes
        var selectedSpecies = this.value;
        console.log("Selected Species:", selectedSpecies);
        populateBreedDropdown(selectedSpecies);
    });

    // Call the function to populate breed dropdown when the page loads
    populateBreedDropdown(foundPetTypeInput.value);

    // Function to populate breed dropdown based on selected species
    function populateBreedDropdown(species) {
        var breedOptions = {
            dog: ["Labrador Retriever", "Staffordshire Bull Terrier", "Border Collie", "Golden Retriever", "German Shepherd", "Cavalier King Charles Spaniel", "French Bulldog", "Australian Shepherd", "Poodle", "Australian Cattle Dog", "Boxer", "Dachshund", "Beagle", "Pembroke Welsh Corgi", "Shih Tzu", "Maltese", "Rottweiler", "Bull Terrier", "Siberian Husky", "Australian Terrier"],
            cat: ["Domestic Shorthair", "Domestic Longhair", "Siamese", "Maine Coon", "Ragdoll", "Persian", "Bengal", "British Shorthair", "Scottish Fold", "Sphynx", "Abyssinian", "Birman", "Norwegian Forest Cat", "Oriental", "Burmese", "Exotic Shorthair", "Russian Blue", "Devon Rex", "American Shorthair", "Turkish Van"],
            bird: ["Budgerigar", "Cockatiel", "Lovebird", "Finch", "Cockatoo", "Parakeet", "Canary", "African Grey Parrot", "Conure", "Amazon Parrot", "Lorikeet", "Macaw", "Eclectus Parrot", "Quaker Parrot", "Senegal Parrot", "Pionus Parrot", "Caique Parrot", "Poicephalus Parrot", "Cockatiel", "Bourke's Parrot"],
            rabbit: ["Netherland Dwarf", "Holland Lop", "Mini Rex", "Lionhead", "Flemish Giant", "English Angora", "French Lop", "Mini Lop", "Rex", "Polish", "Himalayan", "Dutch", "Jersey Wooly", "Lionlop", "American Fuzzy Lop", "Hotot", "Continental Giant", "English Lop", "Silver Fox", "Havana"],
            guineaPig: ["Abyssinian", "Peruvian", "American", "Teddy", "Silkie", "Coronet", "Texel", "Skinny Pig", "Merino", "Rex", "Sheltie", "Crested", "Himalayan", "Alpaca", "Baldwin", "Lunkarya", "White Crested", "Teddywidder", "Harlequin", "Magpie"],
            ferret: ["Sable", "Albino", "Silver Mitt", "Dark-Eyed White", "Champagne", "Chocolate", "Black Sable", "Cinnamon", "Sable Mitt", "Blaze", "Panda", "Sandy", "Cinnamon Panda", "Lilac", "Silver", "Black Eyed White", "Cinnamon Mitt", "Sable Blaze", "Black Roan", "Cinnamon Roan"]
        };

        var breedsDropdown = document.getElementById("breed");
        breedsDropdown.innerHTML = "<option value=''>Select a breed</option>";

        breedOptions[species].forEach(function(breed) {
            var option = document.createElement("option");
            option.value = breed;
            option.textContent = breed;
            breedsDropdown.appendChild(option);
        });
    }

    // Function to display the popup
    function displayPopup() {
        var popup = document.getElementById("popup");
        popup.style.display = "block";
    }

    // Function to close the popup
    function closePopup() {
        var popup = document.getElementById("popup");
        popup.style.display = "none";
    }
});

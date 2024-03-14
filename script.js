document.addEventListener("DOMContentLoaded", function() {
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
        breedsDropdown.innerHTML = ""; // Clear previous options

        // Populate breed dropdown based on the selected species
        if (species in breedOptions) {
            breedOptions[species].forEach(function(breed) {
                var option = document.createElement("option");
                option.value = breed;
                option.textContent = breed;
                breedsDropdown.appendChild(option);
            });
        } else {
            var defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "Select a breed";
            breedsDropdown.appendChild(defaultOption);
        }
    }

    // Show/hide other pet type input based on selection
    var lostPetTypeInput = document.getElementById("lostPetType");
    lostPetTypeInput.addEventListener("change", function() {
        // Call the function to populate the breed dropdown when the pet type changes
        var selectedSpecies = this.value;
        populateBreedDropdown(selectedSpecies);
    });

    // Call the function to populate breed dropdown when the page loads
    populateBreedDropdown(lostPetTypeInput.value);

    // JavaScript code to handle form submission for Lost Pet Form
    var lostPetForm = document.getElementById("lostPetForm");
    lostPetForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form data
        var formData = new FormData(this);

        // Send form data via AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "lostSubmit.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Success: Do something with the response if needed
                    console.log(xhr.responseText);
                    alert("Form submitted successfully!");
                } else {
                    // Error: Handle the error
                    console.error("Error:", xhr.statusText);
                    alert("Error submitting form.");
                }
            }
        };
        xhr.send(formData);
    });
});


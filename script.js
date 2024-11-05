// Function for Home Page (index.html) to handle "No" response
function showNoMessage() {
    document.getElementById("no-message").style.display = "block";
}

// Function to navigate to the next page
function goToPage(page) {
    window.location.href = page;
}

// Store the selected date in localStorage and move to the next page
function storeDate() {
    const date = document.getElementById("date").value;
    if (date) {
        localStorage.setItem("selectedDate", date);
        goToPage("food_selection.html");
    } else {
        alert("Please select a date!");
    }
}

// Store the selected food in localStorage and move to the next page
function storeFood() {
    const food = document.getElementById("food").value;
    localStorage.setItem("selectedFood", food);
    goToPage("location_selection.html");
}

// Store the selected location in localStorage and move to the next page
function storeLocation() {
    const location = document.getElementById("location").value;
    localStorage.setItem("selectedLocation", location);
    goToPage("excitement_rating.html");
}

// Store the excitement level in localStorage and move to the summary page
function storeExcitement() {
    const excitement = document.getElementById("excitement").value;
    if (excitement >= 1 && excitement <= 10) {
        localStorage.setItem("excitementLevel", excitement);
        goToPage("summary.html");
    } else {
        alert("Please enter an excitement level between 1 and 10.");
    }
}

// Display the summary message on the summary page
function displaySummary() {
    const chosenDate = localStorage.getItem("selectedDate");
    const chosenLocation = localStorage.getItem("selectedLocation");

    if (chosenDate && chosenLocation) {
        document.getElementById("chosen-date").textContent = chosenDate;
        document.getElementById("chosen-location").textContent = chosenLocation;
    } else {
        alert("Something went wrong. Please start over.");
        goToPage("index.html");
    }
}

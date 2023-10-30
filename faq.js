// JavaScript Code
function showAlert() {
    alert("This is an alert message!");
}

function showPrompt() {
    var response = prompt("Please enter your name:");
    if (response !== null) {
        alert("Hello, " + response + "!");
    }
}

// Additional JavaScript Functionality
function toggleSectionVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Function to highlight FAQ items on click
function highlightFAQItem(item) {
    item.style.backgroundColor = "#f5f5f5";
    item.style.transition = "background-color 0.3s";
}

// Function to remove highlight from FAQ items
function unhighlightFAQItem(item) {
    item.style.backgroundColor = "#fff";
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Function to open links in a new tab
function openInNewTab(url) {
    window.open(url, "_blank");
}

// Function to handle form submission
function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform form validation and submission logic here
    // For now, let's display the entered data in an alert
    alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

    // Optionally, you can clear the form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

// Function to handle tab switching
function switchTab(tabId) {
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    document.getElementById(tabId).style.display = "block";
}

// JavaScript code for form submission
const appointmentForm = document.getElementById('appointmentForm');
const errorContainer = document.getElementById('errorContainer');

appointmentForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Clear previous error messages
  errorContainer.innerHTML = '';

  // Perform field validation
  let hasErrors = false;

  if (formData.get('patientName').trim() === '') {
    hasErrors = true;
    displayErrorMessage('Please enter your name.');
  }

  if (!formData.get('appointmentDate')) {
    hasErrors = true;
    displayErrorMessage('Please select a preferred date.');
  }

  // ... perform validation for other fields ...

  if (!hasErrors) {
    // Submit the form
    // ...
    showConfirmationMessage();
    resetForm();
  }
});

function displayErrorMessage(message) {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessage.style.color = 'red';
  errorContainer.appendChild(errorMessage);
}

// ...

<div class="container">
  <div id="errorContainer"></div>
  <form class="appointment-form" id="appointmentForm">
  
    <button type="submit">Book Appointment</button>
  </form>
</div>


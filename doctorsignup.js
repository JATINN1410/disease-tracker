// doctorsignup.js

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const signupSuccessMessage = document.getElementById('signup-success');
    const signupErrorMessage = document.getElementById('signup-error');
  
    signupForm.addEventListener('submit', async function(event) {
      event.preventDefault();
  
      const fullName = document.getElementById('fullname').value;
      const email = document.getElementById('email').value;
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Simulate asynchronous process with a delay (replace with real process)
      signupSuccessMessage.textContent = 'Signing up...';
      await delay(2000); // Simulated delay of 2 seconds
  
      // Simulated success (replace with your signup logic)
      signupSuccessMessage.textContent = `Signup successful! Welcome, ${fullName} (${username})`;
      clearFormFields();
    });
  
    // Function to simulate delay
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    function clearFormFields() {
      document.getElementById('fullname').value = '';
      document.getElementById('email').value = '';
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
    }
  });

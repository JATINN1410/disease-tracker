// // login.js

// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('login-form');
//     const loginError = document.getElementById('login-error');
//     const usernameInput = document.getElementById('username');
//     const passwordInput = document.getElementById('password');
//     const forgotPasswordLink = document.getElementById('forgot-password-link');
//     const forgotPasswordForm = document.getElementById('forgot-password-form');
//     const forgotPasswordEmail = document.getElementById('forgot-password-email');
//     const forgotPasswordMessage = document.getElementById('forgot-password-message');
  
//     loginForm.addEventListener('submit', event => {
//       event.preventDefault();
//       const username = usernameInput.value;
//       const password = passwordInput.value;
  
//       // Simulated username and password (replace with your authentication logic)
//       const validUsername = 'patient';
//       const validPassword = 'secure123';
  
//       if (username === validUsername && password === validPassword) {
//         // Successful login, redirect or perform desired action
//         alert('Login successful!');
//       } else {
//         loginError.textContent = 'Invalid username or password.';
//       }
//     });
  
//     // Clear error message when user starts typing
//     usernameInput.addEventListener('input', () => {
//       loginError.textContent = '';
//     });
  
//     passwordInput.addEventListener('input', () => {
//       loginError.textContent = '';
//     });
  
//     // Client-side validation for username and password
//     usernameInput.addEventListener('blur', () => {
//       if (usernameInput.value.length < 5) {
//         usernameInput.classList.add('invalid');
//       } else {
//         usernameInput.classList.remove('invalid');
//       }
//     });
  
//     passwordInput.addEventListener('blur', () => {
//       if (passwordInput.value.length < 8) {
//         passwordInput.classList.add('invalid');
//       } else {
//         passwordInput.classList.remove('invalid');
//       }
//     });
  
//     // Forgot Password functionality
//     forgotPasswordLink.addEventListener('click', event => {
//       event.preventDefault();
//       forgotPasswordForm.style.display = 'block';
//     });
  
//     forgotPasswordForm.addEventListener('submit', async event => {
//       event.preventDefault();
//       const email = forgotPasswordEmail.value;
  
//       // Simulate asynchronous process with a delay (replace with real process)
//       forgotPasswordMessage.textContent = 'Sending reset instructions...';
//       await delay(2000); // Simulated delay of 2 seconds
//       forgotPasswordMessage.textContent = `Instructions sent to ${email}.`;
//       forgotPasswordEmail.value = '';
//     });
  
//     // Function to simulate delay
//     function delay(ms) {
//       return new Promise(resolve => setTimeout(resolve, ms));
//     }
//   });
  
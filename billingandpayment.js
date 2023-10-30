
    const form = document.getElementById('paymentForm');
    const cardNumberInput = document.getElementById('card-number');
    const expirationInput = document.getElementById('expiration');
    const cvvInput = document.getElementById('cvv');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm()) {
            // Simulate form submission delay (remove this in production)
            setTimeout(function () {
                showSuccessMessage();
                form.reset();
            }, 1000);
        }
    });

    cardNumberInput.addEventListener('input', function () {
        formatCardNumber();
        validateCardNumber();
    });

    expirationInput.addEventListener('input', function () {
        formatExpiration();
        validateExpiration();
    });

    cvvInput.addEventListener('input', function () {
        validateCVV();
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const cardNumber = cardNumberInput.value.trim();
        const expiration = expirationInput.value.trim();
        const cvv = cvvInput.value.trim();

        if (name === '' || email === '' || cardNumber === '' || expiration === '' || cvv === '') {
            alert('Please fill in all required fields.');
            return false;
        }

        if (!isValidEmail(email)) {
            alert('Invalid email address.');
            return false;
        }

        if (!validateCardNumber()) {
            return false;
        }

        if (!validateExpiration()) {
            return false;
        }

        if (!validateCVV()) {
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    }

    function validateCardNumber() {
        const cardNumber = cardNumberInput.value.trim();
        const cardNumberPattern = /^[0-9]{16}$/;

        if (!cardNumberPattern.test(cardNumber)) {
            showError(cardNumberInput, 'Please enter a valid 16-digit card number.');
            return false;
        }

        clearError(cardNumberInput);
        return true;
    }

    function validateExpiration() {
        const expiration = expirationInput.value.trim();
        const expirationPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;

        if (!expirationPattern.test(expiration)) {
            showError(expirationInput, 'Please enter a valid expiration date (MM/YY).');
            return false;
        }

        clearError(expirationInput);
        return true;
    }

    function validateCVV() {
        const cvv = cvvInput.value.trim();
        const cvvPattern = /^[0-9]{3}$/;

        if (!cvvPattern.test(cvv)) {
            showError(cvvInput, 'Please enter a valid 3-digit CVV.');
            return false;
        }

        clearError(cvvInput);
        return true;
    }

    function showError(inputElement, errorMessage) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = errorMessage;

        inputElement.parentNode.appendChild(errorElement);
    }

    function clearError(inputElement) {
        const errorElement = inputElement.parentNode.querySelector('.error-message');
        if (errorElement) {
            inputElement.parentNode.removeChild(errorElement);
        }
    }

    function formatCardNumber() {
        const cardNumber = cardNumberInput.value.replace(/\D/g, '');
        const formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
        cardNumberInput.value = formattedCardNumber;
    }

    function formatExpiration() {
        const expiration = expirationInput.value.replace(/\D/g, '');
        if (expiration.length > 2) {
            expirationInput.value = expiration.slice(0, 2) + '/' + expiration.slice(2);
        }
    }

    function showSuccessMessage() {
        successMessage.style.display = 'block';
    }


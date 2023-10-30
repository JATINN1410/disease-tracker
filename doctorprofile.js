
        const contactSection = document.querySelector(".contact-section");
        const contactForm = contactSection.querySelector("form");
        const nameInput = contactForm.querySelector("#name");
        const emailInput = contactForm.querySelector("#email");
        const messageInput = contactForm.querySelector("#message");
        const submitButton = contactForm.querySelector("button");

        // Hide the contact form initially
        contactForm.style.display = "none";

        // Toggle the display of the contact form
        function toggleContactForm() {
            if (contactForm.style.display === "none") {
                contactForm.style.display = "block";
            } else {
                contactForm.style.display = "none";
            }
        }

        // Validate the form inputs
        function validateForm() {
            if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
                alert("Please fill out all fields.");
                return false;
            }
            return true;
        }

        // Add click event listener to the contact section header
        const contactSectionHeader = contactSection.querySelector("h3");
        contactSectionHeader.addEventListener("click", toggleContactForm);

        // Add submit event listener to the form
        contactForm.addEventListener("submit", function (event) {
            if (!validateForm()) {
                event.preventDefault();
            } else {
                // Simulate submitting appointment request
                const appointmentRequest = {
                    name: nameInput.value,
                    email: emailInput.value,
                    message: messageInput.value,
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString()
                };
                
                // Display the appointment request in the Requests section
                displayAppointmentRequest(appointmentRequest);

                // Clear form inputs
                nameInput.value = "";
                emailInput.value = "";
                messageInput.value = "";
                
                event.preventDefault(); // Prevent actual form submission
            }
        });

        // Display upcoming appointments dynamically
        const appointmentsSection = document.querySelector(".appointments-section");
        const upcomingAppointments = [
            { date: "2023-09-10", time: "14:00", patient: "Alice" },
            { date: "2023-09-12", time: "10:30", patient: "Bob" }
            // Add more upcoming appointments here
        ];

        function displayAppointments() {
            const appointmentsList = appointmentsSection.querySelector("ul");
            appointmentsList.innerHTML = ""; // Clear existing list

            for (const appointment of upcomingAppointments) {
                const listItem = document.createElement("li");
                listItem.textContent = `${appointment.date}, ${appointment.time} - ${appointment.patient}`;
                appointmentsList.appendChild(listItem);
            }
        }

        displayAppointments();

        // Display appointment request in the Requests section
        function displayAppointmentRequest(request) {
            const requestsSection = document.querySelector(".requests-section");
            const requestsList = requestsSection.querySelector("ul");
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>${request.date}, ${request.time}</strong><br>
                <span>Name: ${request.name}</span><br>
                <span>Email: ${request.email}</span><br>
                <span>Message: ${request.message}</span>
            `;
            requestsList.appendChild(listItem);
        }
 

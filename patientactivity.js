document.getElementById("activity-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Gather form data
    const activityDate = document.getElementById("activity-date").value;
    const patientName = document.getElementById("patient-name").value;
    const predicateDisease = document.getElementById("predicate-disease").value;
    const symptoms = document.getElementById("symptoms").value;
    const doctorName = document.getElementById("doctor-name").value;
    const doctorContact = document.getElementById("doctor-contact").value;

    // Display collected data (you can customize this part)
    console.log("Activity Date:", activityDate);
    console.log("Patient Name:", patientName);
    console.log("Predicate Disease:", predicateDisease);
    console.log("Symptoms:", symptoms);
    console.log("Doctor Name:", doctorName);
    console.log("Doctor Contact:", doctorContact);

    // Show confirmation message
    const confirmationMessage = `Patient Activity and Doctor Suggestion submitted:
    Activity Date: ${activityDate}
    Patient Name: ${patientName}
    Predicate Disease: ${predicateDisease}
    Symptoms: ${symptoms}
    Doctor Name: ${doctorName}
    Doctor Contact: ${doctorContact}`;

    alert(confirmationMessage);

    // Clear form fields
    document.getElementById("activity-date").value = "";
    document.getElementById("patient-name").value = "";
    document.getElementById("predicate-disease").value = "";
    document.getElementById("symptoms").value = "";
    document.getElementById("doctor-name").value = "";
    document.getElementById("doctor-contact").value = "";
});

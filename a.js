document.addEventListener('DOMContentLoaded', function () {
    const symptomForm = document.querySelector('#symptom-form');
    const symptomTable = document.querySelector('#symptom-table');
    const symptomNameInput = document.querySelector('#symptom-name');
    const symptomDateInput = document.querySelector('#symptom-date');
    const symptomSeverityInput = document.querySelector('#symptom-severity');
    const symptomDescriptionInput = document.querySelector('#symptom-description');
    const addButton = document.querySelector('#add-button');
    const statsContainer = document.querySelector('#stats-container');

    let editingSymptom = null; // Store the currently edited symptom

    // Function to fetch COVID-19 statistics by country
    async function fetchCovidStatistics(countryCode) {
        try {
            const response = await fetch(`https://api.covid19api.com/total/dayone/country/${countryCode}`);
            const data = await response.json();
            const latestData = data[data.length - 1];
            return latestData;
        } catch (error) {
            console.error('Error fetching COVID-19 data:', error);
            return null;
        }
    }

    symptomForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const symptomName = symptomNameInput.value;
        const symptomDate = symptomDateInput.value;
        const symptomSeverity = symptomSeverityInput.value;
        const symptomDescription = symptomDescriptionInput.value;

        if (!symptomName || !symptomDate || !symptomSeverity || !symptomDescription) {
            alert('Please fill out all fields.');
            return;
        }

        if (editingSymptom) {
            // Edit an existing symptom
            editingSymptom.cells[0].textContent = symptomDate;
            editingSymptom.cells[1].textContent = symptomName;
            editingSymptom.cells[2].textContent = symptomSeverity;
            editingSymptom.cells[3].textContent = symptomDescription;

            alert('Symptom edited successfully.');
            addButton.textContent = 'Add Symptom';
            editingSymptom = null;
        } else {
            // Add a new symptom to the table
            // ...

            addButton.textContent = 'Add Symptom';

            alert('Symptom added successfully.');
        }

        symptomForm.reset();

        // Recalculate and display statistics
        calculateAndDisplayStats();
    });

    symptomTable.addEventListener('click', function (event) {
        if (event.target.classList.contains('edit-button')) {
            const row = event.target.closest('tr');
            editingSymptom = row;
            symptomNameInput.value = row.cells[1].textContent;
            symptomDateInput.value = row.cells[0].textContent;
            symptomSeverityInput.value = row.cells[2].textContent;
            symptomDescriptionInput.value = row.cells[3].textContent;
            addButton.textContent = 'Save Edit';
        } else if (event.target.classList.contains('delete-button')) {
            const row = event.target.closest('tr');
            if (confirm('Are you sure you want to delete this symptom?')) {
                row.remove();
                alert('Symptom deleted successfully.');
            }
        }

        // Recalculate and display statistics
        calculateAndDisplayStats();
    });

    async function calculateAndDisplayStats() {
        // Fetch COVID-19 statistics for a specific country (e.g., 'us' for the United States)
        const countryCode = 'us'; // Replace with the desired country code
        const covidData = await fetchCovidStatistics(countryCode);

        if (covidData) {
            // Display COVID-19 statistics in the statsContainer
            statsContainer.innerHTML = `
                <h2>COVID-19 Statistics (${covidData.Country})</h2>
                <p>Total Confirmed Cases: ${covidData.Confirmed}</p>
                <p>Total Deaths: ${covidData.Deaths}</p>
                <p>Total Recovered: ${covidData.Recovered}</p>
            `;
        } else {
            // Handle API fetch error
            statsContainer.innerHTML = '<p>Failed to fetch COVID-19 statistics.</p>';
        }
    }
});


       
    const diseaseCards = document.querySelectorAll(".disease-card");
   

diseaseCards.forEach(card => {
  card.clickCount = 0; // Initialize click count for each card

  const toggle = card.querySelector(".toggle");
  toggle.addEventListener("click", () => {
    const content = card.querySelector(".toggle-content");
    content.classList.toggle("show");

    // Increment click count
    card.clickCount++;

    // Sort the disease cards based on click count
    const sortedCards = Array.from(diseaseCards)
      .sort((a, b) => b.clickCount - a.clickCount);

    // Reorder the cards in the container
    sortedCards.forEach(sortedCard => {
      sortedCard.parentNode.appendChild(sortedCard);
    });
  });
});

// JavaScript code for searching disease cards
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  diseaseCards.forEach(card => {
    const diseaseName = card.querySelector("h2").textContent.toLowerCase();
    const symptomList = Array.from(card.querySelectorAll(".toggle-content li")).map(li => li.textContent.toLowerCase());

    if (diseaseName.includes(searchTerm) || symptomList.some(symptom => symptom.includes(searchTerm))) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// JavaScript code for highlighting disease cards on hover
diseaseCards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.backgroundColor = "#f2f2f2";
  });

  card.addEventListener("mouseout", () => {
    card.style.backgroundColor = "#fff";
  });
});

// JavaScript code for smooth scrolling and back to top button
const backToTopButton = document.getElementById("backToTopButton");
backToTopButton.addEventListener("click", () => {
  const confirmation = confirm("Are you sure you want to go back to the top?");
  if (confirmation) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// JavaScript code for tracking user's time on page
const startTime = new Date().getTime();
window.addEventListener("beforeunload", () => {
  const endTime = new Date().getTime();
  const timeSpent = (endTime - startTime) / 1000; // in seconds
  console.log(`User spent ${timeSpent} seconds on the page.`);
});
 
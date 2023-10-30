// document.addEventListener("DOMContentLoaded", function () {
//     // Image Slider
//     const sliderImages = document.querySelectorAll(".slider-image");
//     let currentImageIndex = 0;

//     function showNextImage() {
//         sliderImages[currentImageIndex].classList.remove("visible");
//         currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
//         sliderImages[currentImageIndex].classList.add("visible");
//     }

//     // Auto-advance the slider every 5 seconds (5000 milliseconds)
//     setInterval(showNextImage, 5000);

//     // Add a click event listener to allow manual navigation of the slider
//     const sliderControls = document.querySelectorAll(".slider-control");
//     sliderControls.forEach(function (control) {
//         control.addEventListener("click", function () {
//             const direction = this.getAttribute("data-direction");
//             if (direction === "next") {
//                 showNextImage();
//             }
//         });
//     });

//     // Toggle mobile navigation menu
//     const navToggle = document.querySelector(".nav-toggle");
//     const navMenu = document.querySelector(".nav-menu");

//     navToggle.addEventListener("click", function () {
//         navMenu.classList.toggle("active");
//     });

//     // Smooth scrolling for navigation links
//     const navLinks = document.querySelectorAll(".nav a");

//     navLinks.forEach(function (link) {
//         link.addEventListener("click", function (e) {
//             e.preventDefault();
//             const targetId = this.getAttribute("href").substring(1);
//             const targetSection = document.getElementById(targetId);
//             const offsetTop = targetSection.offsetTop;

//             window.scroll({
//                 top: offsetTop,
//                 behavior: "smooth",
//             });

//             // Close the mobile navigation menu
//             navMenu.classList.remove("active");
//         });
//     });

//     // Additional custom JavaScript can be added here

//     // Your other JavaScript code goes here
// });

const p1Elements = document.querySelectorAll(".p1");

for (const p1 of p1Elements) {
  p1.addEventListener("mouseenter", () => {
    p1.style.fontWeight = '1000';
  });

  p1.addEventListener("mouseleave", () => {
    p1.style.fontWeight = '200';
  });
}

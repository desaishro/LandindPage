const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
      slide.style.opacity = 1; // Fade in effect
    } else {
      slide.style.display = "none";
      slide.style.opacity = 0; // Ensure hidden slides have no opacity
    }
  });
}

// Move to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Loop to the first slide after the last
  showSlide(currentSlide);
}

// Move to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop to the last slide before the first
  showSlide(currentSlide);
}

// Event Listeners
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Initialize the slider
showSlide(currentSlide);

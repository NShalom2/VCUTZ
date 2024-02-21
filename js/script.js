const toggleButton = document.querySelector(".toggle-btn");
const toggleButtonIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleButton.onclick = function() {
    dropDownMenu.classList.toggle('open')
}

const slideShow = document.querySelector('.slide-show');
const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image-container img');
let currentIndex = 0;
const slideWidth = images[0].offsetWidth + 10; // Width of one slide + spacing
const scrollFactor = 1;

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    const scrollAmount = currentIndex * slideWidth * scrollFactor;
    imageContainer.style.transform = `translateX(-${scrollAmount}px)`;
}

function startCarousel() {
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

startCarousel();

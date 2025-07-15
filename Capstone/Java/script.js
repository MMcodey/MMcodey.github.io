/*var carouselWidth =$('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width();

var scrollPosition = 0;

$('.carousel-control-next').on('click', function(){
  console.log('next');
  scrollPosition = scrollPosition + cardWidth;
  $('.carousel-inner').animate({scrollLeft:scrollPosition}, 600);

});*/

/* Modal variables */
const openBtn = document.getElementById("openModal");
const openBtnPhone = document.getElementById("openModalPhone");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

/* Skills Speech bubbles animation variables */
const slideElements = document.querySelectorAll(".slide-element");

const slideElementsTwo = document.querySelectorAll(".slide-element-two");

/* Open Model Phone Navbar */
openBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

/* Close Modal */
closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});

/* Open Modal Tablet Navigation */
openBtnPhone.addEventListener("click", () => {
  modal.classList.add("open");
});

/* Skills Speech bubles slide functionality */
function checkSlide() {
  slideElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const isVisible = elementTop < window.innerHeight;

    if (isVisible) {
      element.classList.add("slide-in");
    } else {
      element.classList.remove("slide-in");
    }
  });

  slideElementsTwo.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const isVisible = elementTop < window.innerHeight;

    if (isVisible) {
      element.classList.add("slide-in");
    } else {
      element.classList.remove("slide-in");
    }
  });
}

window.addEventListener("scroll", checkSlide);

/* Carousel Activation and speed */
$(function () {
  // Activate Carousel
  $("#myCarousel").carousel();
});

$(document).ready(function () {
  $(".carousel").carousel({
    interval: 5000,
  });
});

/*
var myCarousel = document.getElementById('carouselExampleControls');
var carousel = new bootstrap.Carousel(myCarousel);
var playButton = document.getElementById('playButton');
var isPlaying = false; // Track the state

playButton.addEventListener('click', function() {
  if (isPlaying) {
    carousel.pause();
    playButton.textContent = 'Play';
  } else {
    carousel.cycle();
    playButton.textContent = 'Pause';
  }
  isPlaying = !isPlaying;
});

*/

const sliderImages = document.querySelector('.slider-images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const slideWidth = 33.33;

function goToSlide(index) {
  currentIndex = index;
  const translateX = -1 * currentIndex * slideWidth;
  sliderImages.style.transform = `translateX(${translateX}%)`;
}

function goToNextSlide() {
  if (currentIndex < 2) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  goToSlide(currentIndex);
}

function goToPrevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = 2;
  }
  goToSlide(currentIndex);
}

prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);

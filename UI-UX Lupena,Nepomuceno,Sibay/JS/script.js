let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlide = 0;
let interval;

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        currentSlide = 0;
    }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function startAutoSlide() {
    interval = setInterval(nextSlide, 3000); // Adjust the time (in milliseconds) between slides
}

function stopAutoSlide() {
    clearInterval(interval);
}

prevButton.addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
    stopAutoSlide();
});

nextButton.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
});

carouselContainer.addEventListener('mouseenter', stopAutoSlide);
carouselContainer.addEventListener('mouseleave', startAutoSlide);

startAutoSlide();



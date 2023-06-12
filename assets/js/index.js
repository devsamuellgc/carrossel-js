// carousel.js
window.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const carouselContent = document.querySelector('.carousel-content');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselItemWidth = carousel.clientWidth;
    const carouselPrevBtn = document.querySelector('.carousel-prev');
    const carouselNextBtn = document.querySelector('.carousel-next');
  
    let currentIndex = 0;
    let interval;
  
    function startCarousel() {
      interval = setInterval(nextSlide, 3000);
    }
  
    function stopCarousel() {
      clearInterval(interval);
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      updateCarousel();
    }
  
    function updateCarousel() {
      carouselContent.style.transform = `translateX(-${currentIndex * carouselItemWidth}px)`;
    }
  
    startCarousel();
  
    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);
  
    carouselPrevBtn.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      updateCarousel();
    });
  
    carouselNextBtn.addEventListener('click', nextSlide);
  });
  
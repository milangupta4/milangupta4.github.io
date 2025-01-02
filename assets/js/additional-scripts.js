

  document.addEventListener('DOMContentLoaded', function() {
      const carousels = document.querySelectorAll('.blog-carousel');
      
      carousels.forEach(carousel => {
          const inner = carousel.querySelector('.blog-carousel-inner');
          const items = carousel.querySelectorAll('.blog-carousel-item');
          const prev = carousel.querySelector('.blog-carousel-button.prev');
          const next = carousel.querySelector('.blog-carousel-button.next');
          let currentIndex = 0;
  
          function showSlide(index) {
              inner.style.transform = `translateX(-${index * 100}%)`;
          }
  
          prev.addEventListener('click', () => {
              currentIndex = (currentIndex - 1 + items.length) % items.length;
              showSlide(currentIndex);
          });
  
          next.addEventListener('click', () => {
              currentIndex = (currentIndex + 1) % items.length;
              showSlide(currentIndex);
          });
      });
  });
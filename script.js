let currentIndex = 0;

    function scrollCarousel(direction) {
      const carousel = document.getElementById("carousel");
      const slides = carousel.children;
      const totalSlides = slides.length;

      currentIndex += direction;

      if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
      } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
      }

      const slideWidth = slides[0].offsetWidth;
      carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    window.addEventListener("resize", () => {
      const carousel = document.getElementById("carousel");
      const slides = carousel.children;
      const slideWidth = slides[0].offsetWidth;
      carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    });
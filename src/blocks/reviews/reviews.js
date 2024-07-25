document.addEventListener("DOMContentLoaded", function (event) {
  if (window.innerWidth <= 998) {

    const swiper = new Swiper(".reviews .swiper-container", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".reviews .swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 4000,
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

      },
    });
  }

});
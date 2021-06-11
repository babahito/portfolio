$(document).ready(function () {
  const swiper01 = new Swiper('.swiper-slider_01', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const swiper02 = new Swiper('.swiper-slider_02', {
    loop: true,
    speed: 600,
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      500: {
        slidesPerView: 3,
        spaceBetween: 12
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 18
      }
    },
  });
});
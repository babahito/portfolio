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
});
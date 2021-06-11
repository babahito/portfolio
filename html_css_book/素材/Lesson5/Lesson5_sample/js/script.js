(function () {
  'use strict';

  var swiper = new Swiper('.swiper-container._top', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });
  var swiper = new Swiper('.swiper-container._detail', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
}());

  //ハンバーガーメニュー
$(document).ready(function () {
  $("#header-btn").on("click",function(){
    $("body").toggleClass("is-openMenu");
  });
});
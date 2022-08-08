import Swiper from 'swiper/bundle';

export function initReviews() {
  const swiperPhotos = new Swiper('.js-reviews-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.js-reviews-next',
      prevEl: '.js-reviews-prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".js-reviews-counter",
      type: "fraction",
    }
  });

  const swiperContent = new Swiper('.js-reviews-slider-photos', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  swiperPhotos.controller.control= swiperContent;
  swiperContent.controller.control = swiperPhotos;
}

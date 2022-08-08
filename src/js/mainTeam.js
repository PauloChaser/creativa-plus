import Swiper from 'swiper/bundle';

export function initMainTeam() {
  new Swiper('.js-main-team-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.js-main-team-slider-next',
      prevEl: '.js-main-team-slider-prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });
}





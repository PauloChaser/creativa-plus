import Swiper from 'swiper/bundle';

export function initMainExperience() {
  const counter = document.querySelector('.js-main-experience-counter');

  const swiper = new Swiper('.js-main-experience-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.js-main-experience-slider-next',
      prevEl: '.js-main-experience-slider-prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.js-main-experience-dots',
      type: 'bullets',
      bulletClass: 'mainExperience__paginationItem',
      bulletActiveClass: 'mainExperience__paginationItem--active'
    },
    on: {
      slideChange: () => {
        if (!counter) {
          return;
        }
        counter.textContent = `${swiper.realIndex + 1} / ${swiper.slides.length}`;
      },
      init: (swiper) => {
        if (!counter) {
          return;
        }
        counter.textContent = `1 / ${swiper.slides.length}`;
      },
    }
  });
}

import { Carousel } from './classes/Carousel';
import { isWindowSizeSmallerThen } from './utils/helpers';

export function initMainDevelopSolutions() {
  const options = {
    prevEl: '.js-develop-slider-prev',
    nextEl: '.js-develop-slider-next',
    activeSlideClass: 'carouselItem--active',
    disabledArrowClass: 'circleArrow--disabled',
    scrollAfter: isWindowSizeSmallerThen() ? 0 : 1
  }

  if (isWindowSizeSmallerThen()) {
    options.progressBar = '.js-develop-progress';
  }

  new Carousel('.js-develop-solutions-carousel', options);
}





import { isWindowSizeSmallerThen } from './utils/helpers';

export function initInNumbers() {
  const inNumbersBlock = document.querySelector('.js-in-numbers');

  if (!inNumbersBlock) {
    return
  }

  const inNumbersPagination = document.querySelector('.js-in-numbers-pagination');

  const inNumbersItems = inNumbersBlock.querySelectorAll('.inNumbersItems__item');
  let currentIndex = 0;

  setInterval(() => {
    inNumbersItems[currentIndex].classList.remove('inNumbersItems__item--active');
    inNumbersPagination && inNumbersPagination.children[currentIndex].classList.remove('inNumbersItems__paginationIcon--active');

    currentIndex = currentIndex === inNumbersItems.length - 1 ? 0 : currentIndex + 1;

    inNumbersItems[currentIndex].classList.add('inNumbersItems__item--active');
    inNumbersPagination && inNumbersPagination.children[currentIndex].classList.add('inNumbersItems__paginationIcon--active');
  }, 4000);

  if (isWindowSizeSmallerThen(1024)) {

  }
}

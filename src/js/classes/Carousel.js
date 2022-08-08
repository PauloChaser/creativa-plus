import 'swiped-events/dist/swiped-events.min';
import { debounce, isTouch } from '../utils/helpers';

export class Carousel {
  constructor(selector, options) {
    const element = document.querySelector(selector);

    if (!element) {
      return;
    }

    const {
      nextEl,
      prevEl,
      activeSlideClass = 'active',
      disabledArrowClass = 'disabled',
      scrollAfter = 0,
      progressBar,
    } = options;

    this.scrollAfter = scrollAfter;
    this.activeSlideClass = activeSlideClass;
    this.disabledArrowClass = disabledArrowClass;
    this.progressBar = progressBar && document.querySelector(progressBar);

    this.carousel = element;

    this.carouselLayer = this.carousel.firstElementChild;
    this.slides = this.carouselLayer.children;

    this.currentIndex = 0;
    this.count = this.slides.length;

    if (nextEl && prevEl) {
      this.nextEl = document.querySelector(nextEl);
      this.prevEl = document.querySelector(prevEl);
    }

    this.recalculateSlideWidth();
    this.addListeners();
    this.updateProgressBar();
  }

  slide(step, e) {
    e && e.preventDefault();

    this.prevIndex = this.currentIndex;
    const newIndex = this.currentIndex + step;

    if (
      newIndex < 0 ||
      newIndex > this.count - 1
    ) {
      return;
    } else {
      this.currentIndex += step;
    }

    this.update();
  }

  recalculateSlideWidth() {
    const slide = [...this.slides].find((element) => !element.classList.contains(this.activeSlideClass));
    this.slideWidth = slide?.offsetWidth || 'auto';
  }

  update() {
    this.moveActiveClass();
    this.updateArrows();
    this.moveLayer();
    this.updateProgressBar();
  }

  updateProgressBar() {
    if (this.progressBar) {
      this.progressBar.style.width = `${Math.floor((this.currentIndex + 1) / (this.count) * 100)}%`;
    }
  }

  updateArrows() {
    if (this.prevEl && this.nextEl) {
      this.prevEl.classList.toggle(this.disabledArrowClass, this.currentIndex === 0);
      this.nextEl.classList.toggle(this.disabledArrowClass, this.currentIndex === this.count - 1);
    }
  }

  moveActiveClass() {
    [...this.slides].forEach((slide, i) => {
      slide.classList.toggle(this.activeSlideClass, i === this.currentIndex);
    });
  }

  moveLayer() {
    if (
      this.currentIndex <= this.scrollAfter
      && this.prevIndex < this.currentIndex
      && !isTouch()
    ) {
      return;
    }

    const offsetSlide = this.slides[this.currentIndex - this.scrollAfter];
    const offset = this.scrollAfter > 1 ? this.slideWidth : offsetSlide?.offsetLeft || 0; // todo

    this.carouselLayer.style.transform = `translateX(${-offset}px)`;
  }

  addListeners() {
    if (this.nextEl && this.prevEl) {
      this.nextEl.addEventListener('click', (e) => this.slide(1, e));
      this.prevEl.addEventListener('click', (e) => this.slide(-1, e));
    }

    if (isTouch()) {
      this.carousel.addEventListener('swiped-left', (e) => this.slide(1, e));
      this.carousel.addEventListener('swiped-right', (e) => this.slide(-1, e));
    }

    window.addEventListener('resize', debounce(() => {
      setTimeout(() => this.recalculateSlideWidth(), 800);
    }));

    this.carouselLayer.addEventListener('click', (e) => {
      const slide = e.target.closest('.carouselItem');

      if (!slide || slide.classList.contains('carouselItem--active')) {
        return
      }

      const pos = [...this.slides].indexOf(slide)
      this.slide( pos - this.currentIndex, e)
    })
  }
}

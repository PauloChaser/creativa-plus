import 'swiper/css/bundle';
import './css/style.css';
import { initMainDevelopSolutions } from './js/mainDevelopSolutions';
import { initHeader } from './js/header';
import { initInNumbers } from './js/inNumbers';
import { initMainExperience } from './js/mainExperience';

import { initContactsDetails } from './js/contactsDetails';
import { initMainTeam } from './js/mainTeam';
import { initReviews } from './js/reviews';
import { initModals } from './js/modals';
import { initFooter } from './js/footer';

import { initMap } from './js/map';
import IMask from 'imask';

import { initVideo } from './js/video';

import { initMainCases } from './js/mainCases';
import { initFilterCases } from './js/filterCases';
import { initForms } from './js/forms';
import { initFileInput } from './js/fileInput';

document.addEventListener('DOMContentLoaded', function(event) {
  initHeader();
  initFooter();
  initModals();

  initInNumbers();

  initMainDevelopSolutions();
  initMainExperience();
  initMainCases();
  initMainTeam();

  initReviews();

  initContactsDetails();

  initInputMask();
  initSlideUp();

  initVideo();
  initFilterCases();

  initForms();
  initFileInput();

  window.initMap = initMap;
});

function initInputMask() {
  const phoneInputs = document.querySelectorAll('input[type="tel"]');

  [...phoneInputs].forEach((input) => {
    IMask(input, {
      mask: '+{7} (000) 000-00-00',
    });
  });
}

function initSlideUp() {
  const slideUpButton = document.querySelector('.js-slide-up');

  if (!slideUpButton) {
    return;
  }

  slideUpButton.addEventListener('click', function() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  });
}








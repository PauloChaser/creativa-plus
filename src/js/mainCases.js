import Swiper from 'swiper/bundle';

export function initMainCases() {
  const mainCasesSlider = new Swiper('.js-main-cases', {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: 'row',
    },
    pagination: {
      el: '.js-main-cases-progressbar',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.js-main-cases-next',
      prevEl: '.js-main-cases-prev',
    },
    spaceBetween: 40,
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 25,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
    },
  });

  window.mainCasesSlider = mainCasesSlider
}

export function renderMainCaseItem(data) {
  return `<div class="mainCases__case swiper-slide" id="case-${data.ID}">
            <div class="mainCases__caseImg">
                <img src="${data.IMAGE_1X}" srcset="${data.IMAGE_1X} 1x, ${data.IMAGE_2X} 2x" alt="Case">
            </div>
            <div class="mainCases__caseContent">
                <div class="mainCases__caseCity">${data.CITY}</div>
                <div class="mainCases__casePlace">${data.SOLUTION}</div>
                <div class="mainCases__caseBtn">
                    <a href="${data.DETAIL_PAGE_URL}" class="btn btn--xs btn--transparent">Смотреть кейс</a>
                </div>
            </div>
          </div>`;
}

import { renderMainCaseItem } from './mainCases';

export function initFilterCases() {
  const items = document.querySelectorAll('.js-filter-select')
  const mainCases = document.querySelector('.js-main-cases')
  const productCases = document.querySelector('.js-product-cases')
  const portfolioCases = document.querySelector('.js-portfolio-cases')
  // const loadMoreButton = document.querySelector(`.${LOAD_MORE_CLASS}`)

  if (!items) {
    return
  }

  items.forEach((el) => {
    el.addEventListener("change", function(e) {
      const value = [...items].reduce((acc, i) => {
        if (i.value) {
          acc += "&" + i.value + "=Y"
        }

        return acc;
      }, 'set_filter=y')

      const count = mainCases || productCases ? 20 : 6;

      const url = `/ajax/cases.php?COUNT=${count}&PAGEN_1=1&${value}`

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (mainCases) {
            mainCases.children[0].innerHTML = updateCases(data, renderMainCaseItem)
            window.mainCasesSlider.update()
          }

          if (productCases) {
            productCases.children[0].innerHTML = updateCases(data, renderProductCaseItem)
            window.productCaseSlider.update()
          }

          if (portfolioCases) {
            const isHideLoadMore = data.NAV.RECORD_COUNT <= 6


            if (loadMoreButton) {
              loadMoreButton.classList.toggle('portfolio__btn--hidden', isHideLoadMore)
            }

            portfolioCases.innerHTML = updateCases(data, renderPortfolioItem)
          }
        })
    })
  })
}

export function updateCases({ ITEMS }, cb) {
  return ITEMS.reduce((acc, item) => {
    acc += cb(item)
    return acc
  }, '')
}

import { SlideToggle } from './classes/SlideToggle';
import { Body } from './classes/Body';

export function initHeader() {
  const burgerIcon = document.querySelector('.js-burger')
  const searchIcon = document.querySelector('.js-search-icon')

  burgerIcon.addEventListener('click', toggleMainMenu)
  searchIcon.addEventListener('click', toggleSearch)

  toggleMobileMenu()
}

function toggleMainMenu() {
  const burger = event.currentTarget;
  const mainMenu = document.querySelector('.js-main-menu')
  const searchPanel = document.querySelector('.js-search-panel')

  if (searchPanel.classList.contains('searchPanel--active')) {
    searchPanel.classList.remove('searchPanel--active')
    burger.classList.remove('header__burger--active')

    Body.toggleOverlay(false)
    Body.releaseBody()
    return
  }

  Body.toggleBody()

  burger.classList.toggle('header__burger--active')
  mainMenu.classList.toggle('mainMenu--active')
  burger.classList.toggle('header__burger--white')
}

function toggleSearch() {
  const burgerIcon = document.querySelector('.js-burger')
  const searchPanel = document.querySelector('.js-search-panel')
  const searchInput = document.querySelector('.js-search-input')

  searchInput.focus()

  burgerIcon.classList.add('header__burger--active')
  searchPanel.classList.add('searchPanel--active')

  Body.toggleOverlay(true)
  Body.fixBody()
}

function toggleMobileMenu() {
  const mainMenuToggles = document.querySelectorAll('.js-menu-slide');

  mainMenuToggles && mainMenuToggles.forEach((spoiler) => {
    const SpoilerElement = new SlideToggle(spoiler.dataset.container, 'mainMenu__nav--active')
    spoiler.addEventListener('click', function() {
      spoiler.classList.toggle('mainMenu__linksHeading--active');
      SpoilerElement.toggle()
    });
  })
}

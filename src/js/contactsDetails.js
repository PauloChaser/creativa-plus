import { SlideToggle } from './classes/SlideToggle';

export function initContactsDetails() {
    const openDetailsButton = document.querySelector('.js-contacts-details-button')

    if (!openDetailsButton || !openDetailsButton.dataset.container) {
        return
    }

    const Spoiler = new SlideToggle(openDetailsButton.dataset.container, 'contactsDetails__tableItems--open');

    openDetailsButton.addEventListener('click', function (e) {
        e.preventDefault()
        openDetailsButton.classList.add('contactsDetails__btn--hidden')
        Spoiler.toggle();
    })
}

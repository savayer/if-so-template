const $links = document.querySelectorAll('a[data-modal="modal"]')
const $modal = document.querySelector('.modal')
const $modalOverlay = document.querySelector('.modal__overlay')
const $modalForm = document.querySelector('.modal__form')
const $closeModal = document.querySelector('.modal__close')

import $ from 'jquery'

function animateOverlay(el, dur, close = false, closeOverlay = false) {
    let fake = {}

    fake.fake = close ? 0 : 125
    $(el).animate(fake, {
        step(now, fx) {
            now = 125 - now
            $(this).css('transform', 'translateX(' + now + '%)');
        },
        done() {
            if (closeOverlay) {
                $modal.classList.remove('showed')
            }
        },
        duration: dur
    }, 'cubic-bezier(0.55, 0.085, 0.68, 0.53)')
}

if ($links && $modal) {
    $links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            $modal.classList.add('showed')

            animateOverlay($modalOverlay, 800)
            animateOverlay($modalForm, 1500)
            document.body.classList.add('overflow-hidden');
        })
    })
}
if ($closeModal) {
    $closeModal.addEventListener('click', () => {
        animateOverlay($modalOverlay, 500, true, true)
        animateOverlay($modalForm, 350, true)
        document.body.classList.remove('overflow-hidden');
    })
}
const $links = document.querySelectorAll('a[data-modal="modal"]')
const $modal = document.querySelector('.modal')
const $modalOverlay = document.querySelector('.modal__overlay')
const $modalForm = document.querySelector('.modal__form')
const $closeModal = document.querySelector('.modal__close')

import $ from 'jquery'

function animateOverlay(el, dur, close = false, closeOverlay = false) {
    let fake = {}

    fake.fake = close ? 0 : 100
    $(el).animate(fake, {
        step(now, fx) {
            now = 100 - now
            $(this).css('transform', 'translateX(' + now + '%)');
        },
        done() {
            if (closeOverlay) {
                $modal.classList.remove('showed')
            }
        },
        duration: dur
    }, 'ease-out')
}

if ($links && $modal) {
    $links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            document.body.classList.add('overflow-hidden');
            $modal.classList.add('showed')

            animateOverlay($modalOverlay, 670)
            animateOverlay($modalForm, 1200)
        })
    })
}
if ($closeModal) {
    $closeModal.addEventListener('click', () => {
        document.body.classList.remove('overflow-hidden');
        animateOverlay($modalOverlay, 500, true, true)
        animateOverlay($modalForm, 400, true)
    })
}
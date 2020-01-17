/* if (document.documentElement.clientWidth <= 992) {
    const firstAnimation = document.querySelector('.mobile_first_animation')

    firstAnimation.addEventListener('transitionend', e => {
        const section = e.target.closest('.earn-promo__steps')

        section.querySelectorAll('[data-aos]').forEach(el => {
            el.classList.add('aos-animate')
        })
    })
} */

if (document.documentElement.clientWidth <= 576) {

    const $steps = document.querySelectorAll('.earn__step')

    $steps.forEach((step, i) => {
        let index = i+1
        step.querySelector('img').setAttribute('data-aos-delay', index * 100)
        step.querySelector('.earn__content').setAttribute('data-aos-delay', index * 100 + 50)
    })

}
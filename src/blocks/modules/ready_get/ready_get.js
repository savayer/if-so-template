const $title = document.querySelectorAll('.ready_get__title span')
const $subTitle1 = $title[0]
const $subTitle2 = $title[1]

const $introtext = document.querySelector('.ready_get__introtext')
const $button = document.querySelector('.ready_get__button');

const $bubble1 = document.querySelector('.ready_get__bubble1')
const $bubble2 = document.querySelector('.ready_get__bubble2')

const $image = document.querySelector('.ready_get__illustration')

if ($title && $introtext && $button && $bubble1 && $bubble2 && $image) {
    if (document.documentElement.clientWidth <= 992) {
        $subTitle1.setAttribute('data-aos-delay', 0)
        $subTitle2.setAttribute('data-aos-delay', 50)

        $introtext.setAttribute('data-aos-delay', 250)

        $button.setAttribute('data-aos-delay', 350)

        $image.setAttribute('data-aos-delay', 600)


        $bubble1.setAttribute('data-aos-delay', 1000)
        $bubble2.setAttribute('data-aos-delay', 1100)

    }
}

const man = document.querySelector('.ready_get__illustration')
if (man) {
    const manMagic = document.querySelector('.ready_get__illustration--magic')
    const title = document.querySelector('.ready_get__title')
    const stars = man.querySelector('.stars')
    let animated = false

    const callback = function (mutationsList) {
        mutationsList.forEach((mutation) => {
            if ( mutation.target.classList.contains('aos-animate') && !animated) {
                animated = true
                setTimeout(() => {
                    stars.classList.add('active')
                    /* man.classList.add('unactive')
                    manMagic.classList.add('active') */
                }, 4500)
                setTimeout(() => {
                    title.querySelector('span').innerHTML = "Let's make"
                    title.querySelector('span:nth-child(2)').innerHTML = "magic!"
                }, 6000)
            }
        });
    };
    const observer = new MutationObserver(callback)

    observer.observe(man, {
        attributes: true,
        attributeFilter: ['class']
    })
}
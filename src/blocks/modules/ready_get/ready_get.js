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
    const svg = man.querySelector('.ready_get__svg')
    const title = document.querySelector('.ready_get__title')
    let animated = false

    const callback = function (mutationsList) {
        mutationsList.forEach((mutation) => {
            if ( mutation.target.classList.contains('aos-animate') && !animated) {
                animated = true
                setTimeout(() => {
                    svg.querySelector('.stars').classList.add('active')
                }, 1250)
                setTimeout(() => {
                    svg.querySelector('.usual-man').classList.add('unactive')
                    svg.querySelector('.magician').classList.add('active')
                }, 2500)
                setTimeout(() => {
                    title.classList.add('hide')
                    title.addEventListener('transitionend', function(e) {
                        if (e.propertyName === 'opacity') {
                            title.querySelector('span').innerHTML = "Let's make"
                            title.querySelector('span:nth-child(2)').innerHTML = "magic!"
                            title.classList.add('magic')
                            title.classList.remove('hide')
                        }
                    })
                }, 3250)
            }
        });
    };
    const observer = new MutationObserver(callback)

    observer.observe(man, {
        attributes: true,
        attributeFilter: ['class']
    })
}
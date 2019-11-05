const $title = document.querySelectorAll('.visitors__title span')
const $subTitle1 = $title[0]
const $subTitle2 = $title[1]

const $introtext = document.querySelectorAll('.visitors__introtext span')
const $intro1 = $introtext[0]
const $intro2 = $introtext[1]

const $bubble1 = document.querySelector('.visitors__bubble1')
const $bubble2 = document.querySelector('.visitors__bubble2')

const $image = document.querySelector('.visitors__illustration')

if (document.documentElement.clientWidth <= 992) {    
    $subTitle1.setAttribute('data-aos-delay', 0)
    $subTitle2.setAttribute('data-aos-delay', 50)

    $intro1.setAttribute('data-aos-delay', 250)
    $intro2.setAttribute('data-aos-delay', 350)
    
    
    $image.setAttribute('data-aos-delay', 600)
    
    
    $bubble2.setAttribute('data-aos-delay', 1000)
    $bubble1.setAttribute('data-aos-delay', 1200)
    
}
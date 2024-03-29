const $workExplainNav = document.querySelector('.work_explain__nav')
const $workExplainImage = document.querySelector('.work_explain__img')
const $workExplainImageMobile = document.querySelector('.work_explain__img-mobile')
if ($workExplainNav) {
    $workExplainNav.addEventListener('click', e => {
        if (e.target.nodeName === 'LI' && e.target.getAttribute('data-image')) {
            const imageUrl = e.target.getAttribute('data-image')
            removeAllActiveFromWorkExplainNav()
            e.target.classList.add('active')
            $workExplainImageMobile.setAttribute('src', imageUrl)
            $workExplainImage.style.backgroundImage = `url(${imageUrl})`
        }
    })
}

function removeAllActiveFromWorkExplainNav () {
    const $liItems = $workExplainNav.querySelectorAll('li')
    if ($liItems) {
        $liItems.forEach($liItem => {
            $liItem.classList.remove('active')
        })
    }
}

const $title = document.querySelectorAll('.work_explain__title span');

const $subTitle1 = $title[0]
const $subTitle2 = $title[1]

const $introtext = document.querySelectorAll('.work_explain__introtext span')

const $intro1 = $introtext[0]
const $intro2 = $introtext[1]

const $list = document.querySelectorAll('.work_explain__list_item')

const $button = document.querySelector('.work_explain__button')

const $image = document.querySelector('.work_explain__illustration')
if ($title && $introtext && $list && $button && $image) {
    if (document.documentElement.clientWidth <= 1199) {

        $subTitle1.setAttribute('data-aos-delay', 50)
        $subTitle2.setAttribute('data-aos-delay', 100)
        
        $intro1.setAttribute('data-aos-delay', 250)
        $intro2.setAttribute('data-aos-delay', 300)

        $list.forEach((item, index) => {
            item.setAttribute('data-aos-delay', (index+1) * 50 + 400 )
        })

        $button.setAttribute('data-aos-delay', 800)

        $image.setAttribute('data-aos-delay', 1000)
    }
}
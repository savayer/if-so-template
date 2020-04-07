const $title = document.querySelectorAll('.reasons__title span')

const $subTitle1 = $title[0]
const $subTitle2 = $title[1]
const $subTitle3 = $title[2]

const $list = document.querySelectorAll('.reasons__list_item')

const $image = document.querySelector('.reasons__illustration')
if ($title && $list && $image) {
    
    if (document.documentElement.clientWidth <= 992) {
        $subTitle1.setAttribute('data-aos-delay', 50)
        $subTitle2.setAttribute('data-aos-delay', 100)
        $subTitle3.setAttribute('data-aos-delay', 150)

        $list.forEach((item, index) => {
            item.setAttribute('data-aos-delay', (index+1) * 50 + 250)
        })

        $image.setAttribute('data-aos-delay', 600)
    }
}

const svg =  document.getElementById('laughing_character');    
if (svg) {
    const main = document.getElementById('laughing_character__main');
    svg.pauseAnimations();
    
    main.onmouseover = function() {
        svg.unpauseAnimations();
        this.setAttribute('class', 'hovered showMouth');
    }
    
    main.onmouseout = function() {
        svg.pauseAnimations();
        this.setAttribute('class', 'showMouth');
    }
}
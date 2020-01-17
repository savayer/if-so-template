const $bubbleLg = document.querySelector('.bubble100--lg')
const $bubbleSm = document.querySelector('.bubble100--sm')

if ($bubbleLg) {
    $bubbleLg.addEventListener('animationend', function(e) {
        if (e.animationName === 'explode') {
            this.classList.add('disableAnimation')
            $bubbleSm.classList.remove('disableAnimation')
            $bubbleSm.classList.add('activeSmAnimation')
        }
    })
}

if ($bubbleSm) {
    $bubbleSm.addEventListener('animationend', function(e) {
        if (e.animationName === 'explode') {
            this.classList.add('disableAnimation')  
            $bubbleLg.classList.remove('disableAnimation')
            $bubbleLg.classList.add('activeLgAnimation')
        }
    })
}

const setTextPosition = () => {
    const text = document.querySelector('.man_on_wheel__text')    

    if (text) {
        const w = document.documentElement.clientWidth
        let right = 0, $r
        if (w <= 1300) {
            right = 9
        }
        if (w <= 780) {
            right = 15
        }
        if (w <= 530) {
            right = 5
        }
        if (w <= 500) {
            right = 15
        }

        switch (text.innerText.length) {
            case 7:
            case 8:
                $r = -15 - right + '%'
                break
            case 9:
            case 10:
                $r = -18 - right + '%'
                break
            case 11:
            case 12:
                $r = -23 - right + '%'
                break
            case 13:
            case 14:
                $r = -26 - right + '%'
                break
            case 15:
            case 16:
                $r = -29 - right + '%'
                break
            default:
                $r = '-13%'
                break;
        }
        text.style.right = $r
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTextPosition()
})

window.addEventListener('resize', () => {
    setTextPosition()
})
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
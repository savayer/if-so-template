const $bubbleLg = document.querySelector('.bubble100--lg')
const $bubbleSm = document.querySelector('.bubble100--sm')

$bubbleLg.addEventListener('animationend', function() {
    this.classList.add('disableAnimation')
    
    $bubbleSm.classList.remove('disableAnimation')
    $bubbleSm.classList.add('activeSmAnimation')
})

$bubbleSm.addEventListener('animationend', function() {
    this.classList.add('disableAnimation')  

    $bubbleLg.classList.remove('disableAnimation')
    $bubbleLg.classList.add('activeLgAnimation')
})
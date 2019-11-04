const $bubbleValues = document.querySelectorAll('.bubble__value')

$bubbleValues.forEach(item => {
    item.innerText.length >= 10 ? item.classList.add('sm') : ''
})

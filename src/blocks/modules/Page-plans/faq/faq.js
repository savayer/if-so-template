const $items = document.querySelectorAll('.faq__item')

const removeOtherSelected = () => {
    $selected = document.querySelectorAll('.selected')
    $selected.forEach(el => {
        el.classList.remove('selected')
        el.querySelector('.faq__answer').style.height = 0
    })
}

$items.forEach(item => {
    item.addEventListener('click', function() {
        let $answer = this.querySelector('.faq__answer')
        if (this.classList.contains('selected')) {
            this.classList.remove('selected')            
            $answer.style.height = 0
        } else {
            removeOtherSelected()
            this.classList.add('selected')
            $answer.style.height = $answer.scrollHeight + 'px'
        }
    })
})
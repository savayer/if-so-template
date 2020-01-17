const $items = document.querySelectorAll('.job__item')

const removeOtherSelected = () => {
    $selected = document.querySelectorAll('.selected')
    $selected.forEach(el => {
        el.classList.remove('selected')
        el.querySelector('.job__content').style.height = 0
        el.querySelector('.job__content').style.margin = '-18px 0'
    })
}

$items.forEach(item => {
    item.addEventListener('click', function() {
        let $answer = this.querySelector('.job__content')
        if (this.classList.contains('selected')) {
            this.classList.remove('selected')            
            $answer.style.height = 0
            $answer.style.margin = '-18px 0'
        } else {
            removeOtherSelected()
            this.classList.add('selected')
            $answer.style.margin = 0
            $answer.style.height = $answer.scrollHeight + 'px'
        }
    })
})
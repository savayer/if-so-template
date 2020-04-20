const widgetTitles = document.querySelectorAll('.widget__title')

const unselect = () => {
    const selected = document.querySelector('.selected')
    if (selected) {
        selected.classList.remove('selected')
        selected.querySelector('.widget__content').style.height = 0
    }
}

widgetTitles.forEach(widgetTitle => {
    widgetTitle.addEventListener('click', function() {
        let $content = this.nextElementSibling
        if (this.parentNode.classList.contains('selected')) {
            unselect()
            $content.style.height = 0
            return
        }

        unselect()
        this.parentNode.classList.add('selected')
        $content.style.height = $content.scrollHeight + 'px'
    })
})
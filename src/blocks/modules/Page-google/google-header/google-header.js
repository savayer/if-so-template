const texts = [
    'running shoes',
    'women shoes',
    'elegant shoes'   
]

const restartAnimaion = el => {
    el.classList.remove('.layer__search_text')
    void el.offsetWidth
    el.classList.add('.layer__search_text')
}

const showQueriesAnimation = () => {
    const searching = document.querySelector('.layer__search_text')
    searching.addEventListener('animationend', e => {
        if (e.animationName !== 'type') return;
        if (e.srcElement.innerText.includes(window.currentShoes)) {
            document.querySelectorAll('.layer__image').forEach(item => item.style.display = 'none')
            document.querySelector('.layer__image--'+window.currentShoes).style.display = 'block'
        }
    })
    if (searching) {
        searching.innerHTML = texts[0]
        restartAnimaion(searching)
        window.currentShoes = 'running'

        setTimeout(() => {
            searching.innerHTML = texts[1]
            restartAnimaion(searching)
            window.currentShoes = 'women'
        }, 4000)
        
    }
}

window.addEventListener('load', e => {
    showQueriesAnimation()
})
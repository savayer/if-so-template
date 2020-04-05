const texts = [
    'running shoes',
    'women shoes',
    'elegant shoes'   
]

const typeText = (parentNode, text, shoes) => {
    let i = 1;
    let currentTimeout;
    parentNode.innerHTML = ''
    for (let letter of text) {
        currentTimeout = i * 80;
        setTimeout(() => {
            parentNode.innerHTML += letter            
        }, currentTimeout)   
        i++

        if (i === text.length) {
            setTimeout(() => {
                document.querySelectorAll('.layer__image').forEach(item => item.style.display = 'none')
                document.querySelector('.layer__image--'+shoes).style.display = 'block'
            }, currentTimeout + 500)
        }
    }
}

const showQueriesAnimation = () => {
    const searching = document.querySelector('.layer__search_text')
    if (searching) {
        typeText(searching, texts[0], 'running')
        setTimeout(() => {
            typeText(searching, texts[1], 'women')
        }, 2500)
        setTimeout(() => {
            typeText(searching, texts[2], 'elegant')
        }, 5000)
    }
}

window.addEventListener('load', e => {
    showQueriesAnimation()
})
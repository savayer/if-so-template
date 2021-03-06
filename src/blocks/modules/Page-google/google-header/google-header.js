/* const texts = [
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
} */

const shoes = [
    'running shoes',
    'women shoes',
    'elegant shoes'
];

window.addEventListener('load', e => {
    const s = document.querySelector('.layer-start-animation-js')    
    if (s) {
        window.counter = 1;
        const text = s.querySelector('.layer__search_text')
        text.classList.add('animate')
        text.innerHTML = shoes[counter-1]
        
        text.addEventListener('animationend', e => {
            if (e.animationName !== 'type') return;
            if (document.querySelector('.layer__image.block')) {
                document.querySelector('.layer__image.block').classList.remove('block')
            }
            document.querySelector('.layer__image--'+counter).classList.add('block')
            counter++;
            if (counter >= 4) {
                counter = 1;
            }
            
            setTimeout(() => {
                restartAnimation(text)
            }, 1000)

        })

        const restartAnimation = el => {
            el.classList.remove('animate')
            text.innerHTML = shoes[counter-1]
            void el.offsetWidth
            el.classList.add('animate')
        }
    }
})
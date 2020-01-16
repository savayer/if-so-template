
const setLogoPostion = () => {
    const text = document.querySelector('.aff_bg__text')
    const w = document.documentElement.clientWidth
    let left = 0;
    
    if (w <= 1600) {
        left = -4;
    }
    
    if (w <= 1050) {
        left = -2;
    }
    
    if (w <= 500) {
        left = -4;
    }
    if (text) {
        switch (text.innerText.length) {
            case 3:
                text.style.left = left+8+'%'
                break;
            case 4:
                text.style.left = left+6+'%'
                break;
            case 5:
                text.style.left = left+6+'%'
                break;
            case 6:
                text.style.left = left+5+'%'
                break;
            case 7:
                text.style.left = left+4+'%'
                break;
            case 8:
                text.style.left = left+3+'%'
                break;
            case 9:
                text.style.left = left+2+'%'
                break;
            case 10:
                text.style.left = left+2+'%'
                break;
            default:
                break;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setLogoPostion()
})

window.addEventListener('resize', () => {
    setLogoPostion()
})
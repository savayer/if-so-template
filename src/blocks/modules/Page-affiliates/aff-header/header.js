
const setLogoPostion = () => {
    const text = document.querySelector('.aff_bg__text')
    
    if (text) {
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
        
        let $l
        switch (text.innerText.length) {
            case 3:
                $l = left+8+'%'
                break;
            case 4:
            case 5:
                $l = left+6+'%'
                break;
            case 6:
                $l = left+5+'%'
                break;
            case 7:
                $l = left+4+'%'
                break;
            case 8:
                $l = left+3+'%'
                break;
            case 9:
            case 10:
                $l = left+2+'%'
                break;
            default:
                break;
        }

        text.style.left = $l
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setLogoPostion()
})

window.addEventListener('resize', () => {
    setLogoPostion()
})
const text = document.querySelector('.aff_bg__text')

switch (text.innerText.length) {
    case 3:
        text.style.left = '8%'
        break;
    case 4:
        text.style.left = '6%'
        break;
    case 5:
        text.style.left = '6%'
        break;
    case 6:
        text.style.left = '5%'
        break;
    case 7:
        text.style.left = '4%'
        break;
    case 8:
        text.style.left = '3%'
        break;
    case 9:
        text.style.left = '2%'
        break;
    case 10:
        text.style.left = '2%'
        break;
    default:
        break;
}
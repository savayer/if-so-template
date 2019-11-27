const $items = document.querySelectorAll('.faq__item')

$items.forEach(item => {
    item.addEventListener('click', function() {
        this.querySelector('.faq__answer').classList.toggle('active');
    })
})
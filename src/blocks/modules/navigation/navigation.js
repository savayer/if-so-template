document.addEventListener('DOMContentLoaded', function() {

    const $burger = document.getElementById('toggle_menu')
    const $menuWrapper = document.querySelector('.navigation__menu_wrapper')
    const $body = document.querySelector('body')
    const $wrapper = document.querySelector('.wrapper')

    $burger.addEventListener('click', function() {
        this.classList.toggle('active');
        $menuWrapper.classList.toggle('active');        
        $body.classList.toggle('overflow-hidden');
        $wrapper.classList.toggle('overflow-hidden');
    })

    const parent = document.querySelectorAll('.menu-item-has-children')[1]
    const link = parent.children[0]

    link.addEventListener('click', e => {
        e.preventDefault();
        link.nextElementSibling.classList.toggle('active')
    })
})
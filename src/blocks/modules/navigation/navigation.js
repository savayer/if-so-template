document.addEventListener('DOMContentLoaded', function() {

    const $burger = document.getElementById('toggle_menu')
    const $menuWrapper = document.querySelector('.navigation__menu_wrapper')
    const $body = document.querySelector('body')
    const $wrapper = document.querySelector('.wrapper')
    if ($burger) {
        $burger.addEventListener('click', function() {
            this.classList.toggle('active');
            $menuWrapper.classList.toggle('active');        
            $body.classList.toggle('overflow-hidden');
            $wrapper.classList.toggle('overflow-hidden');
        })
    }
    
    const parent = document.querySelectorAll('.menu-item-46668')[1] || document.querySelectorAll('.menu-item-35890')[1]
    if (parent) {
        const link = parent.children[0]        
        
        if (link.nodeName === 'A') {
            link.addEventListener('click', e => {
                e.preventDefault();
                link.nextElementSibling.classList.toggle('active')
            })
        }
    }

    window.addEventListener('load', function() {
        var menuIcons = document.querySelectorAll('.menu__icon');
        if (menuIcons) {
            menuIcons.forEach(function(icon) {
                icon.classList.add('active')        
            })
        }
    })
})
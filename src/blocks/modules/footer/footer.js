import $ from 'jquery'

$('.footer__go_up a').on('click', function(e) {
    e.preventDefault();    
    $('html, body').animate({scrollTop: 0}, 1000)
})
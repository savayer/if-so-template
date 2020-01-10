import $ from 'jquery';

$('.slider_articles').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    nextArrow: '<i class="slider-next material-icons">chevron_right</i>',
    prevArrow: '<i class="slider-prev material-icons">chevron_left</i>',
    responsive: [
        {
            breakpoint: 701,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 451,
            settings: {
                slidesToShow: 1
            }
        }
    ]
})
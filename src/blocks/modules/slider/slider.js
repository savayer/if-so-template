import $ from 'jquery';
import 'slick-carousel';

$('.slider__items').slick({
    slidesToScroll: 4,
    slidesToShow: 4,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
        
})
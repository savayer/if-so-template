import $ from 'jquery';
import 'slick-carousel';

$('.slider__items').slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
})
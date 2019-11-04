import $ from 'jquery';
import 'slick-carousel';

$('.slider__items').slick({
    slidesToScroll: 4,
    slidesToShow: 4,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2000,
})
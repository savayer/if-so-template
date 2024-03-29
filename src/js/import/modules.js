import "%modules%/navigation/navigation";
import "%modules%/header/header";
import "%modules%/about/about";
import "%modules%/reasons/reasons";
import "%modules%/how_work/how_work";
import "%modules%/slider/slider";
import "%modules%/visitors/visitors";
import "%modules%/conditions/conditions";
import "%modules%/ready_get/ready_get";
import "%modules%/footer/footer";

import "%modules%/Page-plans/faq/faq";

import "%modules%/Page-docs/docs/docs";

import "%modules%/Free-trial-modal/modal";
import "%modules%/Page-post/post/post";

import "%modules%/Page-affiliates/aff-header/header";
import "%modules%/Page-affiliates/earn-promo/earn-promo";
import "%modules%/Page-affiliates/program/program";

import "%modules%/Page-google/google-header/google-header";

import "%modules%/Page-careers/careers";
import "%modules%/geo/plans/plans";

import "%modules%/preloader/preloader";

import AOS from 'aos';

AOS.init({
    once: true
})

document.addEventListener('transitionend', e => {
    const t = e.target;
    if (t.classList.contains('first_animation')) {
        const $section = t.closest('section')

        const $els = $section.querySelectorAll('[data-aos]')
        $els.forEach(el => {
            el.classList.add('aos-animate')
        })
        
    } else if (t.classList.contains('first_animation_earn')) {
        const $section = t.closest('section')

        const $els = $section.querySelectorAll('.aos-earn')
        $els.forEach(el => {
            el.classList.add('aos-animate')
        })
        
    } else if (t.classList.contains('first_img_animation')) {
        const condItem = t.closest('.cond__item')
        const earnItem = t.closest('.earn__step')
        if (condItem) {
            condItem.querySelector('.cond__content').classList.add('aos-animate')
        } else if (earnItem) {
            earnItem.querySelector('.earn__content').classList.add('aos-animate')
        }
    }
})
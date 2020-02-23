window.onload = function() {
    const $left = document.querySelector('.header__left-cloud')
    const $rightUpper = document.getElementById('right_upper_cloud')
    const $right = document.getElementById('right_cloud')

    const headerNew = document.querySelector('.header--new')

    if (headerNew) {
        headerNew.classList.add('loaded')
    }

    if ($left && $rightUpper && $right) {
        $left.classList.add('active')
        $rightUpper.classList.add('active')
        $right.classList.add('active')
    }
}
window.onload = function() {
    const $left = document.querySelector('.header__left-cloud')
    const $rightUpper = document.getElementById('right_upper_cloud')
    const $right = document.getElementById('right_cloud')

    if ($left && $rightUpper && $right) {
        $left.classList.add('active')
        $rightUpper.classList.add('active')
        $right.classList.add('active')
    }
}
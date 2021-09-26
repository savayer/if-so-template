const $tabsWrapper = document.querySelector('.geo_plans__tabs ul')

if ($tabsWrapper) {
    $tabsWrapper.addEventListener('click', e => {
        if (e.target?.nodeName === 'LI') {
            const el = e.target
            const type = el.dataset.type

            const $tabContent = document.querySelector(`.geo_plans[data-tab="${type}"]`)
            hideAllTabsContent()
            $tabContent.classList.remove('d-none')

            removeActiveClassFromTabs()
            el.classList.add('active')
        }
    })
}

function removeActiveClassFromTabs () {
    $tabsWrapper.querySelectorAll('li').forEach(li => li.classList.remove('active'))
}

function hideAllTabsContent () {
    document.querySelectorAll('.geo_plans').forEach(tabContent => tabContent.classList.add('d-none'))
}
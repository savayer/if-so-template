const $links = document.querySelectorAll('a[data-modal="modal"]')
const $modal = document.querySelector('.modal')
const $closeModal = document.querySelector('.modal__close')

if ($links && $modal) {
    $links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            document.body.classList.add('overflow-hidden');
            $modal.classList.add('show-modal')
        })    
    })
}
if ($closeModal) {
    $closeModal.addEventListener('click', () => {
        $modal.classList.remove('show-modal')
        document.body.classList.remove('overflow-hidden');
    })
}

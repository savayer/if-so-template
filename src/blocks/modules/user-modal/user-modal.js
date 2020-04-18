window.addEventListener('load', e => {
    const handOpenModal = document.querySelector('.open_if-so-user-modal')
    const modal = document.querySelector('.if-so-user-modal')
    const openModalButton = document.querySelector('.open_if-so-user-modal__button.open-modal')
    const closeModalButton = document.querySelector('.if-so-user-modal__close')
    const closeButtonHideTheHand = document.querySelector('.open_if-so-user-modal__close')
    const neverShowButton = document.querySelector('.open_if-so-user-modal__never-show')

    if (handOpenModal && localStorage.getItem('show_modal') !== 'false') {
        handOpenModal.classList.add('active')
    }    

    closeButtonHideTheHand.addEventListener('click', () => {
        handOpenModal.classList.remove('active')
    })

    neverShowButton.addEventListener('click', () => {
        handOpenModal.classList.remove('active')
        localStorage.setItem('show_modal', false);
    })

    openModalButton.addEventListener('click', () => {
        modal.classList.add('opened')
        handOpenModal.classList.remove('active')
        document.body.classList.add('overflow-hidden')
    })

    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('opened')
        document.body.classList.remove('overflow-hidden')
    })
})
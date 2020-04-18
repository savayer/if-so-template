window.addEventListener('load', e => {
    const handOpenModal = document.querySelector('.open_if-so-user-modal')
    const modal = document.querySelector('.if-so-user-modal')
    const openModalButton = document.querySelector('.open_if-so-user-modal__button.open-modal')
    const closeModalButton = document.querySelector('.if-so-user-modal__close')
    const closeButtonHideTheHand = document.querySelector('.open_if-so-user-modal__close')
    const neverShowButton = document.querySelector('.open_if-so-user-modal__never-show')
    
    const openModalHebrewBlock = document.querySelector('.open_if-so-user-modal--hebrew')
    const closeButtonHideHebrew = document.querySelector('.open_if-so-user-modal__button_close.hebrew-close')
    const openModalButtonHebrew = document.querySelector('.open_if-so-user-modal__il-icon')

    if (handOpenModal && localStorage.getItem('show_modal') !== 'false') {
        handOpenModal.classList.add('active')
    }    

    const openModal = (hebrew = true) => {
        modal.classList.add('opened')
        handOpenModal.classList.remove('active')
        document.body.classList.add('overflow-hidden')
        if (!hebrew) {
            modal.classList.add('opened-using-hand')
        }
    }

    closeButtonHideTheHand.addEventListener('click', () => {
        handOpenModal.classList.remove('active')
    })

    neverShowButton.addEventListener('click', () => {
        handOpenModal.classList.remove('active')
        localStorage.setItem('show_modal', false);
    })

    openModalButton.addEventListener('click', () => {
        openModal(false);
    })

    closeModalButton.addEventListener('click', () => {        
        modal.classList.remove('opened')
        document.body.classList.remove('overflow-hidden')
        if (modal.classList.contains('opened-using-hand')) {
            openModalHebrewBlock.classList.add('active')
            modal.classList.remove('opened-using-hand')
        }
    })

    openModalButtonHebrew.addEventListener('click', () => {
        openModal();
    })
    
    closeButtonHideHebrew.addEventListener('click', () => {
        openModalHebrewBlock.classList.remove('active')
    })
})
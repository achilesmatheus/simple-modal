export default function initModal() {

  /**
   * Set the button data-target as modal.
   * This button will open the modal
   */
  const button = document.querySelector('[data-target="modal"]')

  const modal = document.querySelector('.modal')
  const closeButton = document.querySelector('.modal_close')

  const openModal = () => modal.style.display = 'block'
  const closeModal = () => modal.style.display = 'none'

  closeButton.addEventListener('click', closeModal)
  button.addEventListener('click', openModal)

}


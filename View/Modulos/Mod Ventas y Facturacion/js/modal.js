const openModal = document.querySelector('.b1__abrir');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');


/* Modal 1 */
openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
});
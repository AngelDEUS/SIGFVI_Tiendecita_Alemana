/* Modal 2 */
const openModal2 = document.querySelector('.b2__abrir');
const modal2 = document.querySelector('.modal2');
const closeModal2 = document.querySelector('.modal__close2');

/* Modal 2 */
openModal2.addEventListener('click', (e) => {
    e.preventDefault();
    modal2.classList.add('modal--show');
});

closeModal2.addEventListener('click', (e) => {
    e.preventDefault();
    modal2.classList.remove('modal--show');
});

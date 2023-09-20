
const alerta = document.getElementById('venta');

alerta.addEventListener('click', () => {
    alert("¡Venta Realizada con exito!");
});

/* Modal 3*/
const openModal3 = document.querySelector('.b3__abrir');
const modal3 = document.querySelector('.modal3');
const closeModal3 = document.querySelector('.modal__close3');


/* Modal 3 */
openModal3.addEventListener('click', () => {
    modal3.classList.add('modal--show');
});

closeModal3.addEventListener('click', () => {
    modal3.classList.remove('modal--show');
});


/* Modal 2 */
const openModal2 = document.querySelector('.b2__abrir');
const modal2 = document.querySelector('.modal2');
const closeModal2 = document.querySelector('.modal2__close');
var pass = false;

/* Modal 2 */
openModal2.addEventListener('click', (e) => {
    e.preventDefault();
    modal2.classList.add('modal--show');

});

closeModal2.addEventListener('click', (e) => {

    Swal.fire(
        '¡Venta realizada!',
        'Venta realizada con exito, puede continuar',
        'success'
    )
    pass = true;
    console.log('Estado de pass = ', pass);
    e.preventDefault();
    modal2.classList.remove('modal--show');

});
console.log('Estado de pass = ', pass);

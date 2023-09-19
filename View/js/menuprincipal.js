//Evento clic para mover el menu side-bar
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body_m");

// Evento para mostrar y ocultar el menú

function open_close_menu() {
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move")
}

// Funcion para ajuastar la pagina si el ancho de la pagina es menor a 760px, se ocultara el menú al recargar la pagina.

if (window.innerHeight < 760) {
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

// ahora volvemos el menú responsive
window.addEventListener("resize", function () {

    // si el ancho de la pantalla es mayor a 760px remueve las clases
    if (window.innerWidth > 760) {
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    // si el ancho de la pantalla es menor a 760px remueve las clase

    if (window.innerWidth < 760) {
        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});

// Agregar selector o clase Selected
let listElements = document.querySelectorAll('.list__button--click');
let selected = document.getElementsByClassName('list__item');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {

        // Agraga la lista de arrow para rotar la flecha
        listElement.classList.toggle('arrow');
        //selected.classList.toggle('selected');

        // Mustra el submenu de manera dinamica
        let height = 0;
        let menuG = listElement.nextElementSibling;
        if (menuG.clientHeight == "0") {
            height = menuG.scrollHeight;
        }
        menuG.style.height = `${height}px`;
    })
});
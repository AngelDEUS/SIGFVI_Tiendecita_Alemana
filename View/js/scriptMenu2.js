const logo_menu = document.getElementById("logo-menu");
const barralateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");
let listElements = document.querySelectorAll('.list__button--click');//Var Sub_Menu 

//Metodo para aparece el menu en pantallas pequeñas

menu.addEventListener("click", () => {
    barralateral.classList.toggle("max-barra-lateral");

    //Verificamos si se ha agregado la clase de max
    if (barralateral.classList.contains("max-barra-lateral")) {
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else {
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }

    //Verificamos si es menor a 320 y agraga la clase
    //Para la barra lateral
    if (window.innerWidth <= 320) {
        barralateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span) => {
            span.classList.add("oculto")
        })
    }
});

// Metodo para hacer el menu pequeño
logo_menu.addEventListener("click", () => {
    barralateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");

    /*Recorremos la lista de spans para agregarles la clase oculto*/
    spans.forEach((span) => {
        span.classList.toggle("oculto")
    });
})

// Sub_Menu --------------- >

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {

        // Agraga la lista de arrow para rotar la flecha
        listElement.classList.toggle('arrow');

        // Muestra el submenu de manera dinamica
        let height = 0;
        // calcula el alto minimo para que no se desborde
        let menuSub = listElement.nextElementSibling;


        //Validar si contiene la clase '' para poder abrir el sub menu
        if (barralateral.classList.contains("mini-barra-lateral")) {
            //console.log('Contiene la clase "mini-barra-lateral"');
            barralateral.classList.toggle("mini-barra-lateral");
            main.classList.toggle("min-main");

            /*Recorremos la lista de spans para agregarles la clase oculto*/
            spans.forEach((span) => {
                span.classList.toggle("oculto")
            });

            if (menuSub.clientHeight == "0") {
                height = menuSub.scrollHeight;
            }
            menuSub.style.height = `${height}px`
        }
        else {
            //console.log('NO Contiene la clase "mini-barra-lateral"');
            if (menuSub.clientHeight == "0") {
                height = menuSub.scrollHeight;
            }

            menuSub.style.height = `${height}px`

            // se usa template Strings
        }
    })
});
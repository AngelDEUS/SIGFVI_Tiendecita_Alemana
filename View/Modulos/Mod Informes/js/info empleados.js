function mostrarRango() {
    var fechaInicio = document.getElementById("fecha-inicio").value;
    var fechaFin = document.getElementById("fecha-fin").value;
    var bol=true
    if(
        fechaInicio=="" || fechaFin==""
    ){ Swal.fire({
        icon:'warning',
        title:'Por favor llene los campos',
    })
    bol=false
    }
    if(
        bol===true
    ){
        swal.fire("Fecha de inicio: " + fechaInicio + "\nFecha de fin: " + fechaFin);
    }
}
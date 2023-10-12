function validacion() {
    const Nombre = document.getElementById('validationCustom01').value;
    const T_Producto = document.getElementById('validationCustom02').value;
    const C_Neto = document.getElementById('validationCustom03').value;
    const T_Neto = document.getElementById('inputGroupSelect01').value;
    const C_unidades = document.getElementById('validationCustom04').value;
    const Codigo = document.getElementById('validationCustom05').value;
    const P_Compra = document.getElementById('validationCustom06').value;
    const P_Venta = document.getElementById('validationCustom07').value;
    const Fecha_Ven = document.getElementById('validationCustom08').value;
    const proveedor = document.getElementById('validationCustom09').value;



    if(Nombre === ""){
        document.getElementById('val-n-producto').innerHTML ='no dejar celdas en blanco';
    }else{
        document.getElementById('val-n-producto').innerHTML ='';
    }
    if(T_Producto === ""){
        document.getElementById('val-t-producto').innerHTML ='no dejar celdas en blanco';
    }else{
        document.getElementById('val-t-producto').innerHTML ='';
    }
    if(C_Neto === "" || T_Neto === ""){
        document.getElementById('val-c_neto').innerHTML ='no dejar celdas en blanco';
    }else{
        document.getElementById('val-c_neto').innerHTML ='';
    }
    if(C_unidades === ""){
        document.getElementById('val-c_unidad').innerHTML ='no dejar celdas en blanco';
    }else{
        document.getElementById('val-c_unidad').innerHTML ='';
    }
    if(Codigo === ""){
        document.getElementById('val-codigo').innerHTML ='no dejar celdas en blanco';
    }else{
        document.getElementById('val-codigo').innerHTML ='';
    }
    if(P_Compra === ""){
        document.getElementById('val-p_compra').innerHTML ='no dejar celdas en blanco';
    }else{
        document.getElementById('val-p_compra').innerHTML ='';
    }
    if(P_Venta === ""){
        document.getElementById('val-p_Venta').innerHTML ='no dejar celdas en blanco';
    }else{
        document.getElementById('val-p_Venta').innerHTML ='';
    }
    if(Fecha_Ven === ""){
        document.getElementById('val-f_venci').innerHTML ='no dejar celdas en blanco';
    }else{
        document.getElementById('val-f_venci').innerHTML ='';
    }
    if(proveedor === ""){
        document.getElementById('val-proveedor').innerHTML ='no dejar celdas en blanco';
    }else{
        document.getElementById('val-proveedor').innerHTML ='';
    }
    if (!(Nombre === "" || T_Producto === "" || C_Neto === "" || T_Neto === "" || C_unidades === "" || Codigo === "" || P_Compra === "" || P_Venta === "" || Fecha_Ven === "" || proveedor === "")) {
        alert('¡Producto registrado correctamente!')
    } else {
    }

}

function alerta(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
}
function confirmDelete(){
    swal.fire({
        icon:'warning',
        title:'<h2 style="color:yellow">¿Desea eliminar este registro?</h2>',
        background:'#252327',
        confirmButtonColor:'#f2bb15',
        confirmButtonText:'<span onclick="delit()">Eliminar</span>',
        showCancelButton: true,
        cancelButtontext:'Cancelar',
        toast:true
    })
}

function delit(){
    alert('sql a ejecutar')
}
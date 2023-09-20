function Validar(){
    const user='francisco11';
    const password='123456789';

    const formuser=document.getElementById('username').value;
    const formpass=document.getElementById('password').value;

    if(formuser === user && formpass === password){
        Swal.fire({

            title: '<h3 style="color:white">bienvenido</h3>',
			icon:'success',
			confirmButtonText:'Continuar',
			confirmButtonColor:'#f2bb15',
			background:'#252327'            

        }).then(function() {
            window.location.href="../../../../../../Santiago/Proyecto SIGFVI/Proyecto SIGFVI/Vista/Modulos/Modulo informes/html/index-informes.html"
        })
        
    }else{
        Swal.fire({

            title: '<h3 style="color:white">Verifique las credenciales para poder ingresar ☻</h3>',
			icon: 'error',
			confirmButtonText:'Entendido',
            confirmButtonColor:'#f2bb15',
			background:'#252327',
			footer:'<span class="col1">Ingrese solo números de identificación</span>'
          })
    }
}
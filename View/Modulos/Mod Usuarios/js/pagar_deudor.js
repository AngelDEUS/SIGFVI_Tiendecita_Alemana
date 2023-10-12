function Verificar_pago(){
    const Insuma = document.getElementById('suma').value;

    var con=true;

    if(Insuma.trim() === ''){
        document.getElementById('wrong').innerHTML='Digite un valor para pagar en la cuenta';
        con=false;
    }else{
        document.getElementById('wrong').innerHTML='';
    }
    return con;
}

function pago(){
    let con=true;

    if(!Verificar_pago()){
        con=false
    }

    if(con){
        Swal.fire({
            
            text:'Adicion exitosa'
        }).then(function(){
            window.location="../html/tabla deudores.html";
        })
        return true;
        
    }else{
        Swal.fire({
            icon:'warning',
            title:'Rellene los campos del formulario para continuar',
            toast:true
        })
        return false;
    }
}
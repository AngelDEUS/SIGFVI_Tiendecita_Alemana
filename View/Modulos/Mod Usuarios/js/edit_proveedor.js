function Verificar_nombre(){
    const Innombre1 = document.getElementById('name1').value;
    
    let con=true;
    
    if(Innombre1.trim() === ""){
        document.getElementById('wrongname').innerHTML='Este espacio no puede quedar en blanco';
        con=false;
        /*Innombre.focus();*/
    }else{
        document.getElementById('wrongname').innerHTML='';
    }
    
    return con;
}

function Verificar_cel(){
    const Incel = document.getElementById('cel').value;
    
    let con=true;
    
    if(Incel.trim() === ""){
        document.getElementById('wrongcel').innerHTML='Este espacio no puede quedar en blanco';
        con=false;
        /*Innombre.focus();*/
    }else{
        document.getElementById('wrongcel').innerHTML='';
    }
    
    return con;
}

function Verificar_dias(){
    const Indias = document.getElementById('frecuencia').value;

    let con=true;

    if(Indias==="0"){
        document.getElementById('wrongfrec').innerHTML='Seleccione el dia que frecuenta';
        con=false;
    }else{
        document.getElementById('wrongfrec').innerHTML='';
    }

    return con;
}

function Verificar_registro(){

    let con=true;
    console.log(con);

    if(!Verificar_nombre()){
        con=false;
        console.log(con);
        /*Innombre.focus();*/
    }
    if(!Verificar_cel()){
        con=false;
        console.log(con);
        /*Innombre.focus();*/
    }
    if(!Verificar_dias()){
        con=false;
        console.log(con);
        /*Innombre.focus();*/
    }

    if(con){
        Swal.fire({
            
            text:'Registro completado para: '+document.getElementById('name1').value,
        }).then(function(){
            window.location="../html/tabla proveedores.html";
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
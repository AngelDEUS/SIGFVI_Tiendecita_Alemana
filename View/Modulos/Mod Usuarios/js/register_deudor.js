function Verificar_id(){
    const Inidp = document.getElementById('idp').value;

    let con=true;

    if(Inidp.trim() ===''){
        document.getElementById('wrongid').innerHTML='Este espacio no puede quedar en blanco';
        con=false;
        console.log(con);
        /*Innombre.focus();*/
    }else{
        document.getElementById('wrongid').innerHTML='';
    }
    
    return con;
}

function Verificar_name(){
    const Inname = document.getElementById('name').value;

    let con=true;

    if(Inname.trim() === ""){
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

function Verificar_addres(){
    const Inaddres = document.getElementById('Direccion').value;

    let con=true;

    if(Inaddres.trim() === ""){
        document.getElementById('wrongaddres').innerHTML='Este espacio no puede quedar en blanco';
        con=false;
        /*Innombre.focus();*/
    }else{
        document.getElementById('wrongaddres').innerHTML='';
    }
    
    return con;
}

function Verificar_registro(){

    let con=true;
    console.log(con);

    if(!Verificar_id()){
        con=false;
        console.log(con);
        /*Innombre.focus();*/
    }
    if(!Verificar_name()){
        con=false;
        console.log(con);
        /*Innombre.focus();*/
    }
    if(!Verificar_cel()){
        con=false;
        console.log(con);
        /*Innombre.focus();*/
    }
    if(!Verificar_addres()){
        con=false;
        console.log(con);
        /*Innombre.focus();*/
    }

    if(con){
        Swal.fire({
            
            text:'Registro completado. Se ha registrado a: '+document.getElementById('name').value,
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
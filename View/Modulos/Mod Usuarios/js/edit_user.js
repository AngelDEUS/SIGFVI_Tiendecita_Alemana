function Verificar_nombre1(){
    const Innombre1 = document.getElementById('name1').value;
    
    let con=true;
    
    if(Innombre1.trim() === ""){
        document.getElementById('wrongname1').innerHTML='Este espacio no puede quedar en blanco';
        con=false;
        /*Innombre.focus();*/
    }else{
        document.getElementById('wrongname1').innerHTML='';
    }
    return con;
}

function Verificar_nombre2(){
    const Innombre2 = document.getElementById('name2').value;

    let con=true;

    if(Innombre2.trim() === ""){
        document.getElementById('wrongname2').innerHTML='Este espacio no puede quedar en blanco';
        con=false;
    }else{
        document.getElementById('wrongname2').innerHTML='';
    }
    
    return con;
}

function Verificar_apell1(){
    const Inapell1 = document.getElementById('apell1').value;

    let con=true;

    if(Inapell1.trim() === ""){
        document.getElementById('wrongapell1').innerHTML='Este espacio no puede quedar en blanco';
        con=false;
    }else{
        document.getElementById('wrongapell1').innerHTML='';
    }
    
    return con;
}

function Verificar_apell2(){
    const Inapell2 = document.getElementById('apell2').value;

    let con=true;

    if(Inapell2.trim() === ""){
        document.getElementById('wrongapell2').innerHTML='Este espacio no puede quedar en blanco';
        con=false;
    }else{
        document.getElementById('wrongapell2').innerHTML='';
    }
    
    return con;
}

function Verificar_tipoid(){
    const Intipoid = document.getElementById('tipoid').value;

    let con=true;

    if(Intipoid==="0"){
        document.getElementById('wrongtipoid').innerHTML='Seleccione un tipo de identificacion';
        con=false;
    }else{
        document.getElementById('wrongtipoid').innerHTML='';
    }

    return con;
}

function Verificar_id(){
    const Inid = document.getElementById("numid").value;

    let con=true;

    if(Inid.trim() === ""){
        document.getElementById('wrongid').textContent='Este espacio no puede quedar en blanco';
        con=false;
        console.log('teausuas')
    }else{
        document.getElementById('wrongid').innerHTML='';
    }

    return con;
}

function Verificar_tel(){
    const Intel = document.getElementById('cel').value;

    let con=true;

    if(Intel === ""){
        document.getElementById('wrongtel').innerHTML='Este espacio no puede quedar en blanco';
        con=false;
    }else{
        document.getElementById('wrongtel').innerHTML='';
    }

    return con;
}

function Verificar_email(){
    const Inemail = document.getElementById('email').value;

    let con=true;

    if(Inemail===""){
        document.getElementById('wrongemail').innerHTML='Este espacio no puede quedar en blanco';
        con=false;
    }else{
        document.getElementById('wrongemail').innerHTML='';
    }

    return con;
}

function Verificar_registro(){

    let con=true;
    console.log(con);

    if(!Verificar_nombre1()){
        con=false;
        console.log(con);
        /*Innombre.focus();*/
    }
    if(!Verificar_nombre2()){
        con=false;
        /*console.log(con);
        /*Inapellido.focus();*/
    }
    if(!Verificar_apell1()){
        con=false;
        /*console.log(con);
        /*Innacimiento.focus();*/
    }
    if(!Verificar_apell2()){
        con=false;
        /*console.log(con);
        /*Incorreo.focus();*/
    }
    if(!Verificar_tipoid()){
        con=false;
        /*console.log(con);
        /*Inusername.focus();*/
    }
    //validacion de cantidad de caracteres
    if(!Verificar_id()){
        /*document.write('La contraseña debe ser mayor a 8 caracteres para preservar la seguridad');*/
        con=false;
        /*console.log(con);*/
    }
    if(!Verificar_tel()){
        /*document.write('Las contraseñas no son identicas');*/
        con=false;
        /*console.log(con);*/
    }
    if(!Verificar_email()){
        /*document.write('Las contraseñas no son identicas');*/
        con=false;
        /*console.log(con);*/
    }

    
    console.log(con);
    if(con){
        Swal.fire({
            
            text:'Datos Actualizados para: '+document.getElementById('name1').value,
        }).then(function(){
            window.location="../html/tabla usuarios.html";
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
function validar(){
    
var nombre=document.getElementById("usuario").value;
var contra=document.getElementById("pass").value;
if(nombre=="ariascal" && contra=="chiflis"){

    
    window.location="inicio.html";
    
}
else{

    Swal.fire('Usuario o password incorrecto');
}

}
function validar(){
    
var nombre=document.getElementById("usuario").value;
var contra=document.getElementById("pass").value;
if(contra=="chiflis"){

    
    localStorage.setItem("nombre",nombre);

    
    window.location="inicio.html";
    
}
else{

    Swal.fire('Password incorrecto');
}

}
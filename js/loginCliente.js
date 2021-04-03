const form = document.querySelector("#form");
const usuario = document.querySelector ("#usuario");
const clave = document.querySelector ("#contrasena");
const btnSubmit = document.querySelector ("#btnSubmit");
const error = document.querySelector(".error");

//error.style.display = "block";

// Habitar o desabilitar el botón de continuar.
usuario.addEventListener ("input", verificarInput);
clave.addEventListener ("input", verificarInput);

function verificarInput (){
    if (usuario.value != null && usuario.value.length != 0 && 
        clave.value != null && clave.value.length != 0)
        btnSubmit.disabled = false;
    else
        btnSubmit.disabled = true;
}

// Verificación de los datos ingresados en el formulario.
form.addEventListener ("submit", function(e){
    e.preventDefault();
});
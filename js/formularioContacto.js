const errorText = document.querySelector (".error");
const form = document.querySelector (".container-form");
const btnEnviar = document.querySelector ("#btnEnviar");
const nombre = document.querySelector ("#nombre");
const apellido = document.querySelector ("#apellido");
const email = document.querySelector ("#email");
const mensaje = document.querySelector ("#mensaje");

// Inicialización de la animación.
AOS.init();


// Verificación de los datos ingresados en el formulario.
form.addEventListener ("submit", function(e){
    
    e.preventDefault();
    
    verificarCamposVacios ();
    
});

function verificarCamposVacios (){
    let error = false;
    
    if (nombre.value == null || nombre.value.length == 0){
        errorText.innerHTML = "Debes completar el campo de nombre.";
        error = true;
    }
    else if (apellido.value == null || apellido.value.length == 0){
        errorText.innerHTML = "Debes completar el campo de apellido.";
        error = true;
    }
    else if (email.value == null || email.value.length == 0){
        errorText.innerHTML = "Debes completar el campo de email.";
        error = true;
    }
    else if (mensaje.value == null || mensaje.value.length == 0){
        errorText.innerHTML = "Debes completar el campo de mensaje.";
        error = true;
    }

    if (error === true)
        errorText.style.display = "block";
    else
        errorText.style.display = "none";
}
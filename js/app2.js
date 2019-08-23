//______________________________variables___________________________________________________
const email = document.getElementById("email");
const asusto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");
const formularioEnviar = document.getElementById("enviar-mail");
const resetBtn = document.getElementById("resetBtn");
//----------------------------evenlisteners-------------------------------------------------
evenlisteners();
function evenlisteners() {
  //cuando se inicia  la aplicacion   se lanza en evento de "carga del dom" para desabilitar el btn enviar
  document.addEventListener("DOMContentLoaded", iniciandoApp);
  //campos del formulario
  email.addEventListener("blur", validarCampo);
  asusto.addEventListener("blur", validarCampo);
  mensaje.addEventListener("blur", validarCampo);
  //boton de enviar en el submit
  formularioEnviar.addEventListener("submit", enviarEmail);

  // boton de reset
  resetBtn.addEventListener("click", resetFormulario);
}
//-----------------------------funciones----------------------------------------------------
//funciones que desabilita el boton enviar
function iniciandoApp() {
  // vamos a desahabilitar el btn enviar
  btnEnviar.disabled = true;
}
// funcion para validar si un campo esta vacio
function validarCampo() {
  // se valida la longitud del tecto  y que este no este vacio
  validarLongitud(this);

  // validad unicamente el email
  if (this.type === "email") {
    validarEmail(this);
  }
  let errores = document.querySelectorAll(".error");
  if (email.value !== "" && asusto.value !== "" && mensaje.value !== "") {
    if (errores.length === 0) {
      btnEnviar.disabled = false;
    }
  }
}
//funcion para enviar el correo
function enviarEmail(e) {
  //Spiner al presionar enviar
  const spinerGif = document.querySelector("#spinner");
  spinerGif.style.display = "block";

  // gif que envia email (simulacion)
  const enviado = document.createElement("img");
  enviado.src = "img/mail.gif";
  enviado.style.display = "block";

  //ocultar spinner y mostrar dif de enviado
  setTimeout(function() {
    spinerGif.style.display = "none";

    document.querySelector("#loaders").appendChild(enviado);

    setTimeout(function() {
      enviado.remove();
      formularioEnviar.reset();
    }, 4000);
  }, 3000);
  e.preventDefault();
}
//funcion que valida si el capo pasado por parametro esta vacio y lo pinta dependiendo si esta vacio o lleno
function validarLongitud(campo) {
  // si el campo tiene algo lo pinta en verde y remueve la clase error y si no lo pinta de rojo y agrega  la clase error
  if (campo.value.length > 0) {
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}
//funcion que valida si el campo del "para" tiene algun @
function validarEmail(campo) {
  const mensaje = campo.value;
  if (mensaje.indexOf("@") !== -1) {
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}

//resetear el formulario
function resetFormulario(e) {
  formularioEnviar.reset();
  e.preventDefault();
}

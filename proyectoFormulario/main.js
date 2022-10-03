/*crear una variable const con el nombre del campo y el mensaje de validación que vera el usuario */
const nombre = document.getElementById("nombreForm");
var mensajeNombre = document.getElementById("mensajeNombre");
/* esta variable con la expresión regular es para que el nombre no contenga numeros ni caracteres especiales*/
const patron = /^[a-zA-Z]+$/;
/* todas las const y las var pueden ir juntas, ahora estan por separado para aprender*/
const apellidos = document.getElementById("apellidosForm");
var mensajeApellidos = document.getElementById("mensajeApellidos");

const email = document.getElementById("emailForm");
var mensajeEmail = document.getElementById("mensajeEmail");
var expresionRegular = /^[A-Za-z0-9./_-]+@[A-Za-z0-9./_-]+\.[A-Za-z]+$/;

const Actividades = document.getElementById("actividadesForm");
var mensajeActividades = document.getElementById("mensajeActividades");

const check = document.getElementById("check");
var mensajeCheck = document.getElementById('mensajeCheck');

const politicaPrivacidad = document.getElementById('politicaPrivacidad');

const enviar = document.getElementById('enviar');


/* Agrega escuchador para Nombre y valida Nombre */
nombre.addEventListener('change', function () {
    if ((nombre.value.length) < 3) {
        mensajeNombre.innerHTML = "<span style='color: red'>" +
            "Este campo debe tener más de 2 caracteres</span>";
    }
    else if ((patron.test(nombre.value))) {
            mensajeNombre.innerHTML = "<span style='color: green'>" +
                "Campo válido</span>";
    }
    else {
        alert("Error");
    }
})

apellidos.addEventListener('change', function () {
    if ((apellidos.value.length) < 3) {
        mensajeApellidos.innerHTML = "<span style='color: red'>" +
            "Este campo debe tener más de 2 caracteres</span>";
    }
    else if ((patron.test(apellidos.value))) {
            mensajeApellidos.innerHTML = "<span style='color: green'>" +
                "Campo válido</span>";
    }
    else {
        alert("Error");
    }
})

email.addEventListener('change', function validarEmail() {
    if (expresionRegular.test(email.value)){
        mensajeEmail.innerHTML = "<span style='color: green'>" +
            "Campo válido</span>";
    } else {
        alert('el correo electronico no es válido');
        mensajeEmail.innerHTML = "<span style='color: red'>" +
            "Campo no válido, debe tener un formato similar a este nombre@dominio.com</span>";
    }
})

check.addEventListener('change', function validarcheck() {
    if(check.checked) {
        politicaPrivacidad.innerHTML = "<small style='color: green'>" +  
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta deserunt ab expedita, corrupti vero ullam eveniet iure! At beatae eos exercitationem soluta alias.</small>";
        event.currentTarget.submit();
    } else {
        mensajeCheck.innerHTML = "<span style='color: red'>" +
            "Es necesario que acepte las condiciones</span>";
        alert("Es necesario que acepte las condiciones");
    }
})

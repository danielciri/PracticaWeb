

var form = document.getElementById('forma');
var nombre = form.nombre;
var apellido = form.apellido;
var dni = form.dni;
var fechaNac = form.fecha;
var email = form.email;
var password = form.pass;
var nombreTitular = form.nombreTitular;

let buttonSubmit = document.getElementById('submit');




/**
 * Función para validar el formulario 
 */
function validarForm() {

    let isOk = true;

    if (!validarNombre(nombre.value)) {
        isOk = false;
    }
    else if (!validarApellido(apellido.value)) {
        isOk = false;
    }
    else if (!validarDni(dni.value)) {
        isOk = false;
    }

    else if (!validarEmail(email.value)) {
        isOk = false;
    }
    else if (!validarTarjeta(password.value)) {
        isOk = false;
	}
	else if (!validarTitularTarjeta(nombreTitular.value)) {
		isOk = false;
	

	}
	else if(isOk){
		var num = Math.floor((Math.random() * 99999) + 1000000); 
		document.write("<h1>Su numero de reserva es:" + num + "</h1>")
	}
	



 }






/**
 * Comrueba con el método de la libreria si el nombre es correcto
 * en caso contrario, muestra el mensaje de error
 * @param {nombre a validar} value 
 */
function validarNombre(value) {

	let p = document.getElementById('pNombre');

	if (!libValidarCampoTexto(value)) {

        p.style.display = 'inline';
		p.style.color = 'red';
		nombre.focus();
		return false;
	}
	else {
        p.style.display = 'none';
		return true;
	}
}

/**
 * Comrueba con el método de la libreria si el apellido es correcto
 * en caso contrario, muestra el mensaje de error
 * @param {apellido a validar} value 
 */
function validarApellido(value) {

	let p = document.getElementById('pApellido');

	if (!libValidarCampoTexto(value)) {
		
		p.style.display = 'inline';
        p.style.color = 'red';
		apellido.focus();
		return false;
	}
	else {
		p.style.display = 'none';
		return true;
	}
}
/**
 * Validamos el titular de la tarjeta
 * @param {Nombre} value 
 */
function validarTitularTarjeta(value){
	let p = document.getElementById('pNombreTitular');
	if(!libValidarCampoTexto(value)){
		p.style.display = 'inline';
        p.style.color = 'red';
		nombreTitular.focus();
		return false;
	}
	else {
		p.style.display = 'none';
		return true;
	}
	
}

/**
 * Comrueba con el método de la libreria si el dni es correcto
 * en caso contrario, muestra el mensaje de error
 * @param {dni a validar} value 
 */
function validarDni(value) {
	let p = document.getElementById('pDni');

	if (!libValidarNif(value)) {

		p.style.display = 'inline';
        p.style.color = 'red';
		dni.focus();
		return false;
	}
	else {
		p.style.display = 'none';
		return true;
	}
}

/**
 * Comrueba con el método de la libreria si el email es correcto
 * en caso contrario, muestra el mensaje de error
 * @param {email a validar} value 
 */
function validarEmail(value) {
	let p = document.getElementById('pEmail');

	if (!libEsEmail(value)) {
		p.style.display = 'inline';
        p.style.color = 'red';
		email.focus();
		return false;
	}
	else {
		p.style.display = 'none';
		return true;
	}
}


/**
 * Comrueba con el método de la libreria si el numero  es correcto
 * en caso contrario, muestra el mensaje de error
 * @param {numero Tarjeta a validar} value 
 */
function validarTarjeta(value) {

    let p = document.getElementById('pPass');

    if (value.length > 9) {
        p.style.display = 'none';
		return true;q
    }
    else {

        p.style.display = 'inline';
        p.style.color = 'red';

		return false;
    }
}



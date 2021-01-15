
function libValidarNif(nif) {

	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F',
		'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S',
		'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var numero;
	var letra;
	var letraCorrecta;

	if (nif.length != 9) {
		return false;
	}

	numero = nif.substring(0, 8);
	letra = nif.substring(8, 9).toUpperCase();
	letraCorrecta = letras[numero % 23];

	if (letra != letraCorrecta) {
		return false;
	}

	return true;
}

function fechasReservas() {

	let fechaEntradaStr = document.getElementById("entrada").value;
	let fechaSalidaStr = document.getElementById("salida").value;

	let numPersonas = document.getElementById("balloons").value;

	var dateEntrada  = new Date(fechaEntradaStr);
	let dateSalida = new Date(fechaSalidaStr);
	let dateNow = new Date();
	if(dateEntrada.getDate()< dateNow.getDate() ){
		alert("No puede realizar una fecha inferior a la del dia actual");

	}
	 else if(fechaEntradaStr == fechaSalidaStr){
		alert("No puede realizar una reserva por horas, lo siento");

	}
	else  if(dateSalida.getDate() < dateEntrada.getDate() && dateSalida.getMonth() == dateEntrada.getMonth() && dateSalida.getFullYear() == dateEntrada.getFullYear()){
		alert("Reserva no valida");

	}else{
	localStorage.setItem('numPersonas',numPersonas);
	location.href = "formulario.html"
	localStorage.setItem('fechaSalida',fechaSalidaStr);
	localStorage.setItem('fechaEntrada',fechaEntradaStr );
	}


}



function libEsEmail(email) {

	if (email.indexOf('@') > -1 && email.indexOf('.') > -1)
		return true;

	else
		return false;
	
}

function libValidarCampoTexto(campoTexto) {

	if (campoTexto.length <= 0) {
		return false;
	}
	else
		return true;
	
}


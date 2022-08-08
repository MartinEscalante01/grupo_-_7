const form = document.querySelector('form.validation');
const inputs = document.querySelectorAll('form div input');
const selects = document.querySelectorAll('form div select option');

const expresiones = {
	fullName: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{8,12}$/, // 8 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/, // 7 a 14 numeros.
	birthday: /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/,
};

const campos = {
	fullName: false,
	password: false,
	email: false,
	phone: false,
	birthday: false
};

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "fullName":
		 	validarCampo(expresiones.fullName, e.target, 'fullName');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
		case "password2":
			validarPassword2();
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "phone":
			validarCampo(expresiones.phone, e.target, 'phone');
		break;
		case "birthday":
			validarBday();
		break;
	}
};
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} div i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} div i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} div i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} div i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
};

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 div i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 div i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 div i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 div i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
};

 /*const validarBday = () => {
	const campoFecha = document.querySelector("#birthday");
	if(campoFecha.value == ""){
		errores.push("El campo de fecha tiene que estar completo")
	}
}; */

inputs.forEach((input) => {
	if(input.type != "date"){
		input.addEventListener('keyup', validarFormulario);
		input.addEventListener('blur', validarFormulario);
	}
	
});

form.addEventListener('submit', (e) => {
	
	const terminos = document.getElementById('terminos');
	if(campos.fullName && campos.password && campos.email && campos.phone && terminos.checked ){
		/*
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		}); */
		
	} else {
		e.preventDefault();
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

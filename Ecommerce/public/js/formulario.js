const form = document.querySelector('form.validation');
const inputs = document.querySelectorAll('form div input');
const selects = document.querySelectorAll('form div select option');

const expresiones = {
	fullName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
};

const campos = {
	fullName: false,
	password: false,
	email: false,
	phone: false
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

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "fullName":
		 	validarCampo(expresiones.fullName, e.target, 'fullName');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "phone":
			validarCampo(expresiones.phone, e.target, 'phone');
		break;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const terminos = document.getElementById('terminos');
	if(campos.fullName && campos.password && campos.email && campos.phone && terminos.checked ){
		form.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

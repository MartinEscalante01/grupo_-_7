const form = document.querySelector('form.createForm');
const inputs = document.querySelectorAll('form div input');
const selects = document.querySelectorAll('form div select option');

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{5,100}$/, // Letras y espacios, pueden llevar acentos.
	description: /^.{20,1000}$/, // 20 a 1000 digitos.
};

const campos = {
	name: false,
	description: false,
};

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "name":
		 	validarCampo(expresiones.name, e.target, 'name');
		break;
		case "description":
			validarCampo(expresiones.description, e.target, 'description');
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

inputs.forEach((input) => {
	if(input.type != "date"){
		input.addEventListener('keyup', validarFormulario);
		input.addEventListener('blur', validarFormulario);
	}
	
});

form.addEventListener('submit', (e) => {
	if(campos.name && campos.description ){
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

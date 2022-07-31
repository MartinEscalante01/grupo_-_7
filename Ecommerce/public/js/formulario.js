window.addEventListener("load", function(){
	let form = document.querySelector('form.validation');

	form.addEventListener("submit", function(e){
		let errores = [];

		let fullName = document.querySelector("div.selector-box input.name");

		console.log('fullName')

		if(fullName.value == ""){
			errores.push("El campo de Nombre tiene que estar completo")
		}else if (fullName.value.length < 3 ){
			errores.push("El campo de Nombre tiene que tener al menos 3 caracteres")
		};

		let email = document.querySelector("div input.email");

		if(email.value == ""){
			errores.push("El campo de Nombre tiene que estar completo")
		}else if (email.value.length < 3 ){
			errores.push("El campo de Nombre tiene que tener al menos 3 caracteres")
		};

		if(errores.length > 0){
			e.preventDefault();

			let ulErrores = document.querySelector("div.errores ul")
			for (let i = 0; i < ulErrores.length; i++) {

				ulErrores.innerHTML += "<li>" + errores + "</li>" ;
				
			}
		}

	});
});
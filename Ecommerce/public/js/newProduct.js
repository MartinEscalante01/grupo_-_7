window.addEventListener('load', function() {

    let newProduct = this.document.querySelector("form.createForm");

    newProduct.addEventListener("submit", function(e){
        e.preventDefault();

        let errores = [];

        let campoNombre = document.querySelector("input.name");

        if(campoNombre.value == ""){
            errores.push("El Nombre tiene que estar completo")
        }else if ((campoNombre.value < 5)) {
            errores.push("El Nombre tiene que tener al menos 5 dígitos y no puede tener caracteres especiales.")
        };

        let campoDescription = document.querySelector("input.description");

        if(campoDescription.value == ""){
            errores.push("La descripcion tiene que estar completo")
        }else if ((campoDescription.value < 20)) {
            errores.push("La descripcion tiene que tener al menos 20 dígitos")
        };

        // let campoDate = document.querySelector("input.date");

        // if(campoDate.value == ""){
        //     errores.push("Se debe indicar fecha de cumpleaños")
        // }
        
        
        if(errores.length > 0){
            e.preventDefault();

            let ulErrores = document.querySelector("div.errores ul");
            for (let index = 0; index < errores.length; index++){
                ulErrores.innerHTML += "<li>" + errores[index] + "</li>"
            }};
    })
});

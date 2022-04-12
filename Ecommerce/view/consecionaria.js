let autos = require('./autos')

let concesionaria = {
   autos: autos,
 
   buscarAuto: function(patenteB){
      let autoA = this.autos.filter(function(autoB){
         return autoB.patente == patenteB
      })
      if (autoA.length){
         return autoA[0]
      } else {
         return null
      }
   },

   venderAuto: function(patenteB){
    this.buscarAuto(patenteB)
    .vendido = true
      },

   autosParaLaVenta: function(buscarAuto) {
      let autosEnVenta = this.autos.filter (function(auto) {
         return auto.vendido == false
      })
      return autosEnVenta
   },
   autosNuevos: function() {
      return this.autosParaLaVenta().filter(function(auto) {
         return auto.km < 100
      })

   },
   
   listaDeVentas: function listar () {
      let listaPrecios = []
      let vendidos = this.autos.filter(function (auto) {
         return auto.vendido == true
      });
      for(let i = 0; i < vendidos.length; i++) {
         listaPrecios.push(vendidos[i].precio)
      }
      return listaPrecios
   },
   
   puedeComprar: function (auto,comprador){
	    return (((auto.precio/auto.cuotas)<=comprador.capacidadDePagoEnCuotas) && auto.precio<=comprador.capacidadDePagoTotal);
}
}
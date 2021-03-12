import validator from "./validator.js";

//pasamos a la siguiente pagina ocultando el contenido anterior
document.getElementById("pagar").addEventListener("click", cambioDePagina);
  function cambioDePagina() {
    ocultarMostrar("form","contenedor");
}
function ocultarMostrar (pantallaEncendida , pantallaApagada){
  document.getElementById(pantallaApagada).style.display = "none";
  document.getElementById(pantallaEncendida).style.display = "inline";
}


// calculamos valor a pagar del producto y agregamos el evento
const btnCalcular = document.getElementById("pagar")
  btnCalcular.addEventListener("click", valorTotalCompra)
  function valorTotalCompra() {
    let cantidadProductos= document.getElementById("cantidadProductos").value;
    document.getElementById("valorMultiplicacion").innerHTML= "TU TOTAL A PAGAR ES $ "+ validator.valorTotalCompra(cantidadProductos); 
    document.getElementById("valor").innerHTML= "INGRESA LOS DATOS DE TU TARJETA PARA FINALIZAR ";
}


// Restriccion de letras y espacios numero de tarjeta  
document.getElementById ("numeroDeTarjeta").addEventListener("keyup", restriccion);
  function restriccion() {
   const restringirLetras = document.getElementById("numeroDeTarjeta");
   restringirLetras.value = restringirLetras.value 
    .replace(/\s/g, '')
    .replace(/\D/g, '');
}


// Restriccion de letras y espacios CVC
document.getElementById ("cvc").addEventListener("keyup", restriccionCodigo);
  function restriccionCodigo() {
   const restringirCodigo = document.getElementById ("cvc");
    restringirCodigo.value = restringirCodigo.value 
     .replace(/\s/g, '')
     .replace(/\D/g, '');
}

 
//algoritmo Luhn 
function isValid () {
  const numeroDeTarjetaInput = document.getElementById("numeroDeTarjeta").value;
    if (validator.isValid(numeroDeTarjetaInput) == true) {
      let overlay = document.getElementById("overlay");
      overlay.classList.add("active");
      document.getElementById ("validacionTarjeta").innerHTML= validator.maskify(numeroDeTarjetaInput)
    } else {
      let nombreCliente= document.getElementById("nombre").value
       alert (nombreCliente +" su tarjeta es invalida por favor intentelo nuevamente")
      } 
}

const botonValidar = document.getElementById ("botonValidar")
botonValidar.addEventListener ("click", isValid)

  
// agregamos evento al boton cerrar del popup
document.getElementById("cerrarPopup").addEventListener("click", function () {
  let overlay = document.getElementById("overlay");
  overlay.classList.remove("active");  
})

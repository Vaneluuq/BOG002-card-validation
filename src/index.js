import validator from "./validator.js";

document.getElementById("pagar").addEventListener("click", comenzar);
function comenzar() {
ocultarMostrar("form","contenedor");
}
function ocultarMostrar (pantallaEncendida , pantallaApagada){
    document.getElementById(pantallaApagada).style.display = "none";
    document.getElementById(pantallaEncendida).style.display = "inline";
}


const cantidadP= document.getElementById("cantidadProductos");
const precioP = 15000;
const btnCalcular = document.getElementById("pagar");

btnCalcular.addEventListener("click", mul);
function mul () {
const multi = cantidadP.value*precioP;
document.getElementById("valor").innerHTML= "El valor total a pagar es de $ "+ multi + " por favor ingrese la siguiente información para finalizar la compra ";
}


/*Función para llamar el numero de la tarjeta ingresado*/
const numeroDeTarjetaInput =  document.getElementById("numeroDeTarjeta").value;

/*Función para guardar el numero de la tarjeta de crédito*/
function getNumeroDeTarjetaInput(){
    return numeroDeTarjetaInput.value;
}   




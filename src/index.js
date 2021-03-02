//import validator from "./validator.js";

//pasamos a la siguiente pagina ocultando el contenido anterior
document.getElementById("pagar").addEventListener("click", comenzar);
function comenzar() {
ocultarMostrar("form","contenedor");
}
function ocultarMostrar (pantallaEncendida , pantallaApagada){
    document.getElementById(pantallaApagada).style.display = "none";
    document.getElementById(pantallaEncendida).style.display = "inline";
}

// calculamos valor a pagar del producto y agregamos el evento
const cantidadP= document.getElementById("cantidadProductos");
const precioP = 15000;
const btnCalcular = document.getElementById("pagar");

btnCalcular.addEventListener("click", valorTotal);
function valorTotal () {
const multi = cantidadP.value*precioP;
document.getElementById("valor").innerHTML= "El valor total a pagar es de $ "+ multi + " por favor ingrese la siguiente información para finalizar la compra ";
}

// Restriccion de letras y espacios 
 document.getElementById ("numeroDeTarjeta").addEventListener("keyup", restriccion);
 function restriccion() {
const restringirLetras = document.getElementById ("numeroDeTarjeta");
restringirLetras.value = restringirLetras.value 
.replace(/\s/g, '')
.replace(/\D/g, '')
.replace(/([0-9]{4})/g, '$1 ')
.trim();
}

//multiplicacion de los numeros pares,aplicamos Luhn 

function stringN() {
    const numeroDeTarjetaInput =  document.getElementById("numeroDeTarjeta").value;
    let toString  = numeroDeTarjetaInput.toString().split("").reverse();
    let newArray =  []
     for ( let i=0; i<toString.length;i++) {
       if (i % 2 !== 0) {
        newArray.push (toString[i]*2)    
      }
    }
    console.log (encontrar)
  }
  

const btnValidar= document.getElementById("botonValidar");
btnValidar.addEventListener("click", stringN);




/*Función para llamar el numero de la tarjeta ingresado*/


/*Función para guardar el numero de la tarjeta de crédito*/
//function getNumeroDeTarjetaInput(){
  //return numeroDeTarjetaInput.value; }

//function isValid() {
 
//}
//const numero= 2

/*function isValid() {
  const numeroDeTarjetaInput =  document.getElementById("numeroDeTarjeta").value;
  const rest = numeroDeTarjetaInput * numero;
  document.getElementById("respuestaValidacion").innerHTML= "no y si " + rest;
}

const btnValidar= document.getElementById("botonValidar");
btnValidar.addEventListener("click", isValid)

const multiplicacionP = numeroDeTarjetaInput.toString().split("").map(Number);*/
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

// Restriccion de letras y espacios numero de tarjeta  
 document.getElementById ("numeroDeTarjeta").addEventListener("keyup", restriccion);
 function restriccion() {
const restringirLetras = document.getElementById ("numeroDeTarjeta");
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

function toString () {
  const numeroDeTarjetaInput = document.getElementById("numeroDeTarjeta").value;
  const numeros = numeroDeTarjetaInput.split("").reverse();
  console.log("aqui el reverso:"+ numeros)
  let newArray = []
  for (let i=0;i<numeros.length; i++) {
    if (i % 2 !== 0) {
      if (numeros[i]*2 > 9) {
        newArray.push((numeros[i]*2) - 9)
         } else
        newArray.push(numeros[i]*2)
     }  else {
        newArray.push(parseInt(numeros[i]))
   }
  } console.log (newArray)
  
}
 
 const botonValidar = document.getElementById ("botonValidar")
  botonValidar.addEventListener ("click", toString);
 
    

 
/*function sumaTotal (acc, val) {
  return acc + val;
  }
   let respuesta = newArray.reduce(sumaTotal, 0);
   
   if (respuesta % 10 === 0) {
     alert ("Tu tarjeta es valida")
   } else {
     alert ("Tu tarjeta es invalida")
   }
console.log (respuesta)
}
































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
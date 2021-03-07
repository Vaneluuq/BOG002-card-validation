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

let numeroDeTarjetaDos= document.getElementById("numeroDeTarjeta");
let nuevoString =""
let numeroValor = ""
function maskify () {
//for (let i=0; i<numeroDeTarjetaDos.value.length; i++) {
  numeroValor +=numeroDeTarjetaDos.value
  if (numeroValor.length >12){
    nuevoString += numeroValor.charAt(numeroValor.length-1);
    } else {
   nuevoString += "#";
  } 
 numeroDeTarjetaDos.value = nuevoString
 console.log(numeroValor, nuevoString)
}
 let ocultarDigitos= document.getElementById ("numeroDeTarjeta")
 ocultarDigitos.addEventListener("keyup", maskify )  

 
//algoritmo Luhn 
function algoritmoLunh () {
  const numeroDeTarjetaInput = document.getElementById("numeroDeTarjeta").value;
  const numeros = numeroDeTarjetaInput.split("").reverse();
  let nuevoArray = []
 //Validacion numeros pares, multiplicación e ingresamos numeros al nuevo array
  for (let i=0;i<numeros.length; i++) {
    if (i % 2 !== 0) {
      if (numeros[i]*2 > 9) {
        nuevoArray.push((numeros[i]*2) - 9)
         } else
        nuevoArray.push(numeros[i]*2)
  //Ingresamos numeros impares a nuevo array 
     }  else {
        nuevoArray.push(parseInt(numeros[i]))
   }
  }
  // funcion para sumar todos numeros del nuevo array
  function sumaTotal (acc, val) {
  return acc + val;
  }
   let respuesta = nuevoArray.reduce(sumaTotal, 0);
   // validación multiplos de 10
   if (respuesta % 10 === 0) {
     alert ("Tu tarjeta es valida")
   } else {
     alert ("Tu tarjeta es invalida")
   }
console.log (respuesta)
}
 
 let botonValidar = document.getElementById ("botonValidar")
  botonValidar.addEventListener ("click", algoritmoLunh);
 
  
  /*const numeroDeTarjetaDos= document.getElementById("numeroDeTarjeta").value;
  let newArray = numeroDeTarjetaDos.split("").slice(12, 15);
  //let newString = numeroDeTarjetaDos.toString().split("").substr(0,12);
  console.log (newArray)
  //console.log (newString)
   // for (let i=0; i< newString.length; i++) {}    
 // let cobernumber = newString + newArray; }
 }

 let ocultarDigitos= document.getElementById ("numeroDeTarjeta")
 ocultarDigitos.addEventListener("keydown", maskify)  




 

/*  document.getElementById ("numeroDeTarjeta").addEventListener("keyup", maskify)
  function maskify() {
  const numeroDeTarjetaDos = document.getElementById("numeroDeTarjeta").length;
  if (numeroDeTarjetaDos>4) {
    let reverso = numeroDeTarjetaDos.reverse();
    let nuevoString = "";
  for (let i=0; i< reverso.length; i++) {
    if (i < 4){
      nuevoString += reverso[i];
    } else {
      nuevoString += "#";
    }
  } return nuevoString.reverse(); 
  
} else {
  return numeroDeTarjetaDos
}
 function reverse (str) {
   return str.split("").reverse().join("")
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
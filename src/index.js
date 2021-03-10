//import validator from "./validator.js";//

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
document.getElementById("valorMultiplicacion").innerHTML= "EL TOTAL A PAGAR ES $ "+ multi; 

document.getElementById("valor").innerHTML= "INGRESA LA SIGUIENTE INFORMACIÓN PARA FINALIZAR LA COMPRA ";
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
    let overlay = document.getElementById("overlay");
    overlay.classList.add("active");
    }
     else {
     alert ("Tu tarjeta es invalida")
   }
  }

  /*function mostrarMaskify () {
    let validacionTarjeta = document.getElementById ("validacionTarjeta")
    validacionTarjeta.innerHTML(nuevoString)
    if (overlay)
  }*/
  
   
  


//maskify 

let numeroDeTarjetaDos= document.getElementById("numeroDeTarjeta");
let nuevoString =""
let numeroValor = ""
function maskify () {
  numeroValor +=numeroDeTarjetaDos.value
  if (numeroValor.length >12){
    nuevoString += numeroValor.charAt(numeroValor.length -1);
    } else {
   nuevoString += "#";
  } 
  numeroDeTarjetaDos.value = nuevoString
  
}

let botonValidar = document.getElementById ("botonValidar")
botonValidar.addEventListener ("click", algoritmoLunh);




 /*let numeroDeTarjetaDos= document.getElementById("numeroDeTarjeta");
   let nuevoString =""
   let numeroValor = ""
   function maskify () {
     numeroValor +=numeroDeTarjetaDos.value
     if (numeroValor.length >12){
       nuevoString += numeroValor.charAt(numeroValor.length-1);
       } else {
      nuevoString += "#";
     } 
     numeroDeTarjetaDos.value = nuevoString
   console.log (nuevoString, numeroValor)
   
   }
    let ocultarDigitos= document.getElementById ("numeroDeTarjeta")
    ocultarDigitos.addEventListener("keyup", maskify)
    
    
    
    
    let numeroDeTarjetaDos= document.getElementById("numeroDeTarjeta");
let nuevoString =""
let numeroValor = ""
function maskify () {
  numeroValor +=numeroDeTarjetaDos.value
  if (numeroValor.length >12){
    nuevoString += numeroValor.charAt(numeroValor.length-1);
    } else {
   nuevoString += "#";
  } 
  numeroDeTarjetaDos.value = nuevoString
console.log (nuevoString, numeroValor)




let overlay = document.getElementById("overlay")
    let popUp = document.getElementById("popup")
    let validacionTarjeta =document.getElementById ("validacionTarjeta");
      */
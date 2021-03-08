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
 
const botonValidar = document.getElementById ("botonValidar")
  botonValidar.addEventListener ("click", algoritmoLunh);
 
 /*   
 function Maskify(){
 let lastDigits = document.getElementById ("numeroDetarjeta").slice(-4).value;
 let maskedString = lastDigits.padStart(12,"#");

}


.repeat*/
/*const campoNumeros = document.getElementById ("numeroDeTarjeta")
  campoNumeros.addEventListener ('keydown', ocultarNumeros);
/*document.getElementById("numeroDeTarjeta").addEventListener("keyUp", ocultarNumeros);*/
/*function ocultarNumeros () { */
  /*const numerosIngresados = document.getElementById("numeroDeTarjeta").value;
    let numeroDeTarjetaArray = Array.from(numerosIngresados); // Array 1
    /*console.log(numeroDeTarjetaArray)*/
   /* let lengthNumeros = numerosIngresados.length;/*
    let lastFour = numerosIngresados.slice(-4); // Array 2
    let newArray = []; // Array 3
  if (lengthNumeros <= 4) {
      return numerosIngresados;

   }  else if (lengthNumeros > 4) {
      let index = lengthNumeros - 4;
      numeroDeTarjetaArray.splice(index, 4);
      // Loop 1
      numeroDeTarjetaArray.forEach(n => {
          newArray.push('#');
          return newArray;
      });
      // Loop 2
      return newArray.concat(lastFour).join(''); 
      // Array 4
    } 
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
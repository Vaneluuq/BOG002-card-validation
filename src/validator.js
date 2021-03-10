
const validator = {
//algoritmo de Luhn 
 isValid:function(numeroDeTarjetaInput){
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
  
   if (respuesta % 10 === 0) { 
       return true; }
       else  {
       return false;  
       }
},

// funcion maskify para enmascarar los primeros 12 numeros 
maskify: function(numeroValor){
    let ultimosDigitos = numeroValor.slice(-4)
    let nuevoString= ultimosDigitos.padStart(12,"#")
      return nuevoString;
     },

valorTotal: function(cantidadP) {
    const precioProducto= 15000
    let multiplicacionValor = cantidadP*precioProducto
    console.log (cantidadP);
   }
}

export default validator;
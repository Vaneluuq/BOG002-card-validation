const validator = {
  //algoritmo de Luhn 
   isValid:function(numeroDeTarjetaInput){
      const numerosValidacion = numeroDeTarjetaInput.split("").reverse();
      let nuevoArray = []
  //Validacion numeros pares, multiplicación e ingresamos numeros al nuevo array
    for (let i=0;i<numerosValidacion.length; i++) {
      if (i % 2 !== 0) {
         if (numerosValidacion[i]*2 > 9) {
           nuevoArray.push((numerosValidacion[i]*2) - 9)
          } else
           nuevoArray.push(numerosValidacion[i]*2)
  //Ingresamos numeros impares a nuevo array 
      }  else {
         nuevoArray.push(parseInt(numerosValidacion[i]))
      }
    }
    // funcion para sumar todos numeros del nuevo array
    function sumaTotal (acc, val) {
    return acc + val;
    }
     let respuesta = nuevoArray.reduce(sumaTotal, 0);
    //validacion 
     if (respuesta % 10 === 0) { 
         return true; }
         else  {
         return false;  
         }
  },
  
  // funcion maskify para enmascarar los primeros 12 numeros 
  maskify: function(numeroValor){
    let numero = numeroValor.slice(0,-4).replace(/./g, "#") + numeroValor.slice(-4)
    return numero 
    },
  
  
  // funcion valor total para multiplicar el valor del producto por su cantidad 
  valorTotalCompra: function(cantidadProductos) {
      let precioProducto = 15000
      let multiplicacionValor = cantidadProductos*precioProducto
      return (multiplicacionValor);
     }
  };
 
  export default validator;
  
  
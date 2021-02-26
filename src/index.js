/*Función para llamar el numero de la tarjeta ingresado*/
numeroDeTarjetaInput =  document.getElementById("numeroDeTarjeta");

/*Función para guardar el numero de la tarjeta de crédito*/
function getNumeroDeTarjetaInput(){
    return numeroDeTarjetaInput.value;
}   













/*function validar(n){
    let digitos = n.toString().split("").map(Number);
    
    
    if(digitos.length % 2 === 0) {
       digitos = digitos.map((digitos, idx) => idx % 2 === 0 ? digitos * 2 : digitos);  
       digitos = digitos.map((digitos, idx) => idx % 2 === 1 ? digitos * 2 : digitos); 
    }

    digitos = digitos.map(digitos => digitos > 9 ? digitos - 9 : digitos);

    const sum = digitos.reduce((acc, digitos) => acc += digitos, 0);
} */

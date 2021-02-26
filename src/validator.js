document.getElementById("pagar").addEventListener("click", comenzar);
function comenzar() {
ocultarMostrar("form","contenedor");
}
function ocultarMostrar (pantallaEncendida , pantallaApagada){
    document.getElementById(pantallaApagada).style.display = "none";
    document.getElementById(pantallaEncendida).style.display = "inline";
}

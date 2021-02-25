function primerPaso (numeroDeTarjeta) {
    return numeroDeTarjeta.Value;
}
function luhnCheck() {
    const multiplicacionP = primerPaso.toString().split("").map(Number);

    const sum = multiplicacionP
    .map((digit,idx) => idx % 2 === multiplicacionP.length % 2 ? fixDouble(digit*2) : digit).reduce((acc,digit) => acc +=digit,0);

    return sum % 10 === 0;
}
function fixDouble (number) {
    return number > 9 ? number - 9: number;
}
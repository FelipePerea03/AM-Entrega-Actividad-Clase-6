let quantityOfMeters = prompt("Ingrese la cantidad de metro cuadrados");

let priceByMeter = 5000;
let totalPrice = 0;

totalPrice = parseFloat (quantityOfMeters) * priceByMeter;

alert ("El precio total a pagar es: " + totalPrice);

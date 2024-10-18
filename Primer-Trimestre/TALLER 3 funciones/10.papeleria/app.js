// Solicitar al usuario el número de copias que desea imprimir
// let numberOfCopies = prompt("Ingrese el número de copias que desea imprimir:");
let numberOfCopies = 2;

let pricePerCopy;
let totalPrice;

// Determinar el precio por copia según la cantidad
if (numberOfCopies >= 0 && numberOfCopies <= 499) {
    pricePerCopy = 120;
} else if (numberOfCopies >= 500 && numberOfCopies <= 749) {
    pricePerCopy = 100;
} else if (numberOfCopies >= 750 && numberOfCopies <= 999) {
    pricePerCopy = 80;
} else if (numberOfCopies >= 1000) {
    pricePerCopy = 50;
} else {
    pricePerCopy = 0; // Caso para entradas inválidas
    // alert("Número de copias no válido.");
    console.log("Número de copias no válido.");
}

// Calcular el precio total
if (pricePerCopy > 0) {
    totalPrice = numberOfCopies * pricePerCopy;

    // Mostrar el precio por copia y el precio total
    // alert("El precio por copia es: $" + pricePerCopy);
    console.log("El precio por copia es: $" + pricePerCopy);
    // alert("El precio total es: $" + totalPrice);
    console.log("El precio total es: $" + totalPrice);
}

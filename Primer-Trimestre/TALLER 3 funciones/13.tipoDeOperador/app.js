// Solicitar al usuario que ingrese su operador de telefonía móvil
let operator = prompt("Ingrese su operador (Claro, Tigo o Movistar):");

// Convertir el operador a minúsculas para evitar problemas de mayúsculas/minúsculas
// y así facilitar la comparación
let lowerOperator = "";
if (operator === "Claro" || operator === "claro" || operator === "CLARO") {
    lowerOperator = "claro";
} else if (operator === "Tigo" || operator === "tigo" || operator === "TIGO") {
    lowerOperator = "tigo";
} else if (operator === "Movistar" || operator === "movistar" || operator === "MOVISTAR") {
    lowerOperator = "movistar";
}

// Solicitar la cantidad de minutos internacionales consumidos
let internationalMinutes = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));

let fixedCharge = 0;
let internationalMinuteCharge = 0;
let dataPackageCharge = 0;

if (lowerOperator === "claro") {
    fixedCharge = 30000;
    internationalMinuteCharge = 100;
    dataPackageCharge = 18000;
} else if (lowerOperator === "tigo") {
    fixedCharge = 45000;
    internationalMinuteCharge = 200;
    dataPackageCharge = 12000;
} else if (lowerOperator === "movistar") {
    fixedCharge = 40000;
    internationalMinuteCharge = 250;
    dataPackageCharge = 8000;
} else {
    alert("Operador no válido.");
}

// Calcular el costo total
let totalCost = fixedCharge + (internationalMinuteCharge * internationalMinutes) + dataPackageCharge;

// Mostrar el resultado
if (fixedCharge > 0) {
    alert("El costo total es: $" + totalCost);
}

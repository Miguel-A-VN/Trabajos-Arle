// Solicitar al usuario el tamaño del sándwich
let size = prompt("Ingrese el tamaño del sándwich (pequeño o grande):");

// Inicializar el costo del sándwich
let sandwichCost = 0;

// Determinar el costo del sándwich según el tamaño
if (size === "pequeño" || size === "Pequeño") {
    sandwichCost = 6000;
} else if (size === "grande" || size === "Grande") {
    sandwichCost = 12000;
} else {
    alert("Tamaño no válido.");
}

// Solicitar los ingredientes adicionales
let bacon = prompt("¿Desea tocineta? (sí/no)");
let jalapeño = prompt("¿Desea jalapeño? (sí/no)");
let turkey = prompt("¿Desea pavo? (sí/no)");
let cheese = prompt("¿Desea queso? (sí/no)");

// Inicializar el costo de los ingredientes adicionales
let additionalCost = 0;

// Calcular el costo de los ingredientes adicionales
if (bacon === "sí" || bacon === "Sí") {
    additionalCost += 3000;
}
if (turkey === "sí" || turkey === "Sí") {
    additionalCost += 3000;
}
if (cheese === "sí" || cheese === "Sí") {
    additionalCost += 2500;
}

// Calcular el costo total
let totalCost = sandwichCost + additionalCost;

// Mostrar el resultado
if (sandwichCost > 0) {
    alert("El costo total del sándwich es: $" + totalCost);
}

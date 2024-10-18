// Ejercicio 8:
// Calcular los costos que paga un cliente a un gimnasio por una mensualidad teniendo en cuenta
// la siguiente tabla:
//  15 días 30 días 3 meses
// Mensualidad 18000 35000 86000

// let dias = 0;

// if(dias === 15){

// }else if(dias === 30){}



// Solicitar al usuario el número de días
// var days = prompt("¿Cuántos días planeas usar el gimnasio? (15, 30, o 90)");
let days = 90;

let cost;

// Calcular el costo según el número de días
if (days === 15) {
    cost = 18000;
} else if (days === 30) {
    cost = 35000;
} else if (days === 90) {
    cost = 86000;
} else {
    cost = 0; // Para casos en que el número de días no es válido

    // alert("Número de días no válido. Por favor ingresa 15, 30 o 90.");
    console.log("Número de días no válido. Por favor ingresa 15, 30 o 90.");
}

// Mostrar el costo
if (cost > 0) {
    // alert("El costo de la mensualidad es: " + cost);
    console.log("El costo de la mensualidad es: " + cost);
}

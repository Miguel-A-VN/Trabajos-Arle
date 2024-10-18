// Solicitar al usuario que ingrese el número de modelo de su automóvil
let modelNumber = prompt("Ingrese el número de modelo de su automóvil:");

// Determinar si el automóvil está defectuoso
let isDefective = false;

if (modelNumber === 119) {
    isDefective = true;
} else if (modelNumber === 179) {
    isDefective = true;
} else if (modelNumber >= 189 && modelNumber <= 195) {
    isDefective = true;
} else if (modelNumber === 221) {
    isDefective = true;
} else if (modelNumber === 780) {
    isDefective = true;
}

// Mostrar el resultado
if (isDefective) {
    alert("El automóvil está defectuoso, llevar a garantía.");
} else {
    alert("Su automóvil no está defectuoso.");
}

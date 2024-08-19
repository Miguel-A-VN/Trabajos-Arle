// Solicitar al usuario que ingrese los tres ángulos del triángulo

// let angle1 = prompt("Ingrese el primer ángulo del triángulo (en grados):");
// let angle3 = prompt("Ingrese el segundo ángulo del triángulo (en grados):");
// let angle3 = prompt("Ingrese el tercer ángulo del triángulo (en grados):");

let angle1= 50;
let angle2 = 50;
let angle3 = 80;

// Calcular la suma de los ángulos
let sumOfAngles = angle1 + angle2 + angle3;

// Verificar si el triángulo es válido
if (sumOfAngles === 180) {
    // alert("El triángulo es válido.");
    console.log("El triángulo es válido.");
} else {
    // alert("El triángulo no es válido.");
    console.log("El triángulo no es válido.");
}

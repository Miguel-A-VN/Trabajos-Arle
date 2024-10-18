// Escriba un programa ingresar calificaciones de cinco materias: Física, Química, Biología, 
// Matemáticas e Informática. Calcule el porcentaje y la calificación de acuerdo con lo siguiente: 
// Las notas son de 0 a 10. 
// Si el promedio, esta entre 0 y 5.9 9: la calificación es mala. 
// Entre 6 y 8: la calificación es buena. 
// Mayor a 8: la calificación es exelente.

// Materias y Calificacion
let fisica = 5
let quimica = 9
let biologia = 7
let matematicas = 1
let informatica = 2

// Sacando el promedio
let suma = fisica + quimica + biologia + matematicas + informatica
let promedio = suma / 5

// Condiciones
if (promedio >= 0 && promedio < 6) {
    console.log(promedio + "Mala");

} else if (promedio >= 6 && promedio <= 8) {
    console.log(promedio + "Buena");

} else if (promedio > 8 && promedio <= 10) {
    console.log(promedio +"Excelente");

}
// Ejercicio 7:
// Escriba un programa para calcular el valor recibido mensual de una persona por ayuda de la
// alcaldía, donde si el género de la persona es femenino y su edad mayor a 50 años se le da
// 120000.
// Si es mujer entre 30 y los 50 años recibe solo el apoyo de 100000.
// Si es hombre el apoyo es de $40000

// App
let genero = '';
let edad = 0;

alert('🟢SOlO RECIBEN AYUDA MAYORES DE 30 AÑOS')

genero = prompt('🟡Escriba su genero Masculino o Femenino');
edad = prompt('🟡Cual es tu edad');

if(genero === 'Femenino' && edad >= 50){
    alert('Tu ayuda es de $120.000');

}else if(genero === 'Femenino' && edad > 30 && edad < 50){
    alert('Tu ayuda es de $100.000');

}else if(genero === 'Masculino' && edad >= 30){
    alert('Tu ayuda es de $400.000');

}else{
    alert('⚠️CAMPOS VACIOS O HERRONEOS⚠️');

}
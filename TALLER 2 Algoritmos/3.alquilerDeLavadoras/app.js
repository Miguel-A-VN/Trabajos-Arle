// EJERCICIO 3:

// Una empresa que se encarga de alquilar lavadoras necesita una aplicación que 
// calcule el costo a pagar, así: 
// El usuario digita 1, corresponde a lavadora grande. 
// El usuario digita 2, lavadora pequeña. 
// La lavadora grande vale a 4000 por hora prestada. 
// La lavadora pequeña cobra a 3000 por hora prestada. 
// Si alquilan más de 3 lavadoras, se obtiene un descuento del 3%.


// let lav1 = 4000;
// let lav2 = 3000;


// let lavAlquilada = prompt('para alquilar lavadora elija entre lav1 y lav2');
// let cantidadDeLav = prompt('Cuantas lavadoras desea alquilar', 1);
// let numH = prompt('Cuantas horas la va alquilar', 1);

// let lavAlq = lavAlquilada 
// let equal = lavAlquilada * numH;

// if(lavAlquilada === lav1 ){
    
//     alert('Alquilaste lavadora grande por ' + numH + 'horas, Tienes que pagar : ' + equal)


// }else if(lavAlquilada === lav2){

  

// }

// Variables de entrada (puedes cambiar estos valores para probar diferentes casos)
let tipoLavadora = 1; // 1 para lavadora grande, 2 para lavadora pequeña
let horasAlquiladas = 5; // Número de horas alquiladas
let cantidadLavadoras = 4; // Cantidad de lavadoras alquiladas

// Variables de costo
let costoPorHoraGrande = 4000;
let costoPorHoraPequena = 3000;
let costoTotal = 0;

// Calculo del costo sin descuento
if(tipoLavadora === 1) {
    costoTotal = horasAlquiladas * costoPorHoraGrande;
}else if (tipoLavadora === 2) {
    costoTotal = horasAlquiladas * costoPorHoraPequena;
}

// Aplicación del descuento si corresponde
if(cantidadLavadoras > 3) {
    costoTotal = costoTotal * 0.97;
}

// Resultado final
console.log("El costo total a pagar es: " + costoTotal);


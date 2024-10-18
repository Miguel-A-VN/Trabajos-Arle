//EJERCICIO 2:

//Dado un número, dedterminar si el número es positivo o negativo.


// // Campo para digitar numero
// let numero = prompt('Porfavor digite un número', 0);

// //si el numero es mayor a cero es positivo y si el numero es menor a cero es negativo.
// if(numero > 0){

//     console.log('Tu numero es positivo');
//     alert('el numero ' + numero + ' es positivo');

// }else if (numero < 0){

//     console.log('Tu numero es negativo');
//     alert('el numero ' + numero + ' es negativo');

// }else {

//     console.log('El numero es cero');
//     alert('El numero es cero neutro');

// }



const numPosNeg = (numero) => {
    
    if(numero > 0){

        return console.log('el numero ' + numero + ' es positivo');
    
    }else if (numero < 0){
    
        return console.log('el numero ' + numero + ' es negativo');
    
    }else {

        return console.log('El numero es cero');
    
    }
    
}

console.log(numPosNeg(0));

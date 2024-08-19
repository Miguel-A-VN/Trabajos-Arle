// Ejercicio 1
// Una empresa paga el salario por horas. Dadas las horas de trabajo de una persona durante la
// semana, calcule el pago total de la semana, teniendo en cuenta que las horas se pagan
// dependiendo de la cantidad, entre 1 y 10 se pagan a $30000 y mayores a 10 se pagan a
// $33000 Mostar un mensaje así:
// Señor tal XXXX el número de horas es XXX y su salario equivale a XXX

// let empleado = prompt('Nombre del empleado');
// let salario = prompt("salario del empelado por hora", 30.000);
// let horas = prompt('Horas trabajadas');

// let resultado = salario * horas;

// alert('Señor/a '+empleado+ 'Trabajo ' + horas + 'y su salario es ' + resultado );

//--------------------------------------------------------------------------------------
//si ttrabajo de 1 a 10 horas su salario es igual a 30.000, si trabajo mas de 10 horas su salario es igual a 33.000

// let nombre = prompt("Cual es tu nombre");
// let horasDeTrabajo = Number(prompt("cuantas horas trabajo?", 0));
// let ganancias = horasDeTrabajo * 30000;

// if (horasDeTrabajo >= 1 && horasDeTrabajo <= 10 ) {
// 	// console.log('Su pago es de 30.000');
// 	// alert('Señor' + nombre + 'su pago por las' + horasDeTrabajo + 'horas que trabajo es de 30.000');
// 	alert(`Señor ${nombre} su pago por las ${horasDeTrabajo} horas que trabajo es de 30.000, y recibira ${ganancias}`);
// } else if (horasDeTrabajo > 10) {
// 	// console.log('su pago es de 33.000');
// 	// alert('Señor' + nombre + 'su pago por las' + horasDeTrabajo + 'horas que trabajo es de 33.000');
// 	alert(
// 		`Señor ${nombre} su pago por las ${horasDeTrabajo} horas que trabajo es de 33.000 y recibira ${ganancias}`
// 	);
// } else {
// 	// console.log('VALOR DE HORAS HERRONIAS');
// 	alert("VALOR DE HORAS HERRONEAS (NO INGRESAR LETRAS)");
// }

// console.log('Valor herrado');

// let salario = 30000 ;
// let horas = 7;

// let empleado = ' Nombre '

// if(){

// }else{

// }




// ======================================== CAMBIANDOLO A FUNCION ====================================================




function calcSalario (nombre, hora){



	let total = 30000 * hora;

	if (hora >= 1 && hora <= 10 ) {
			// console.log('Su pago es de 30.000');
			
			// alert('Señor' + nombre + 'su pago por las' + horasDeTrabajo + 'horas que trabajo es de 30.000');

			// return alert(`Señor ${nombre} su pago por las ${hora} horas que trabajo es de 30.000, y recibira ${total}`);
			return console.log(`Señor ${nombre} su pago por las ${hora} horas que trabajo es de ${total}`);

		} else if (hora > 10) {

			// console.log('su pago es de 33.000');
			
			// alert('Señor' + nombre + 'su pago por las' + horasDeTrabajo + 'horas que trabajo es de 33.000');

			// return alert(`Señor ${nombre} su pago por las ${hora} horas que trabajo es de 33.000 y recibira ${total}`);

			return console.log(`Señor ${nombre} su pago por las ${hora} horas que trabajo es de ${total}`);

		} else {
			// console.log('VALOR DE HORAS HERRONIAS');

			// return alert("VALOR DE HORAS HERRONEAS (NO INGRESAR LETRAS)");
			return console.log("VALOR DE HORAS HERRONEAS (NO INGRESAR LETRAS)");
			
		}


		return

	
}

console.log (calcSalario("Carlos", 2));
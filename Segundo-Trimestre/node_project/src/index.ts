let verdadero: boolean = true;
let falso: boolean = false;

verdadero = false;
falso = true;

const conAccess: boolean = verdadero && falso;

console.log(conAccess);

let age: number = 123;
let price: number = 1.2;
let count: number = -1;

const total: number = price * count;

console.log(total);

/**
 * Crear una calculadora
 */

function calculadora(num1: number, operator: string, num2: number): number {
	switch (operator) {
		case "+":
			return num1 + num2;
		case "-":
			return num1 - num2;
		case "*":
			return num1 * num2;
		case "/":
			return num1 / num2;
		default:
			return 0;
	}
}

console.log(calculadora(3, "+", 5));

/**
 * Crear un buscador
 */

 // Cambia el segundo argumento a un string.


 function buscador(personas: string[], indice: number): string | null {
    if (indice >= 0 && indice < personas.length) {
        return personas[indice];
    }
    return null; // Retorna null si el índice está fuera de rango.
}

const personas: string[] = [
    "Pepe",
    "Juan",
    "Maria",
    "Pedro",
    "Luis",
    "Carlos",
    "Jose",
    "Maria",
    "Pedro",
    "Luis",
    "Carlos",
    "Jose",
];

console.log(buscador(personas, 5)); // Esto devolverá "Juan"

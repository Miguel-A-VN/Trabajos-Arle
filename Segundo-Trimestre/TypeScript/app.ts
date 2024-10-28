/** Calculadora con typescript */
/*
function calculadora(num1: number, num2: number, operador: string): number {
    let resultado: number;

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            resultado = 0;
    }
    return resultado;
    
    console.log(calculadora(5, 3, "+"));
    }*/
/*
function calculadora(num1: number, num2: number, operador: string): number {
    let resultado: number;

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                throw new Error("Error: División por cero no es permitida.");
            }
            resultado = num1 / num2;
            break;
        default:
            throw new Error("Error: Operador no válido.");
    }
    return resultado;
}

console.log(calculadora(5, 3, "+")); */
/*

Las interfaces y las clases en TypeScript (y en programación orientada a objetos en general) sirven para estructurar y organizar el código de manera más efectiva. Aquí te explico cada uno con más detalle:

Interfaces
Definición de Contratos:

Las interfaces definen un contrato que las clases deben seguir. Esto significa que cualquier clase que implemente una interfaz debe contener las propiedades y métodos especificados por esa interfaz.
Tipado Estático:

Proporcionan un sistema de tipos más robusto. Al usar interfaces, puedes asegurarte de que las estructuras de datos tengan la forma correcta, lo que ayuda a prevenir errores.
Flexibilidad:

Las interfaces permiten que diferentes clases implementen la misma interfaz, lo que facilita la creación de código más flexible y reutilizable.
Ejemplo:

typescript
Copiar código
interface Animal {
    nombre: string;
    hacerSonido(): void;
}

class Perro implements Animal {
    constructor(public nombre: string) {}
    hacerSonido() {
        console.log("Guau");
    }
}

class Gato implements Animal {
    constructor(public nombre: string) {}
    hacerSonido() {
        console.log("Miau");
    }
}

const misAnimales: Animal[] = [new Perro("Rex"), new Gato("Miau")];
misAnimales.forEach(animal => animal.hacerSonido());
Clases
Plantillas para Objetos:

Las clases son plantillas que definen la estructura y comportamiento de los objetos. Permiten crear instancias (objetos) con propiedades y métodos específicos.
Encapsulamiento:

Las clases permiten encapsular datos y comportamientos, lo que significa que puedes ocultar detalles internos y exponer solo lo necesario a través de métodos públicos.
Herencia:

Puedes crear una nueva clase que herede de una clase existente, reutilizando y extendiendo su funcionalidad. Esto promueve la reutilización del código.
Ejemplo:

typescript
Copiar código
class Vehiculo {
    constructor(public marca: string, public modelo: string) {}
    
    mostrarInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

class Coche extends Vehiculo {
    constructor(marca: string, modelo: string, public puertas: number) {
        super(marca, modelo);
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Puertas: ${this.puertas}`);
    }
}

const miCoche = new Coche("Toyota", "Corolla", 4);
miCoche.mostrarInfo();
Resumen
Interfaces: Se utilizan para definir contratos y asegurar que las clases tengan una estructura coherente. Son ideales para el tipado y la flexibilidad.
Clases: Se utilizan para crear objetos con propiedades y métodos. Proporcionan encapsulamiento, herencia y una forma de organizar el código en componentes reutilizables.

 */



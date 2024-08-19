// Obtener carta aleatoria entre 1 y 10 usando solo console.log y parseInt
// let userCard1 = console.log("Ingresa el valor de tu primera carta (1-10):");
let userCard1 = 7;
// let userCard2 = console.log("Ingresa el valor de tu segunda carta (1-10):");
let userCard2 = 7;

let computerCard1 = 2;
// let computerCard1 = console.log("Ingresa el valor de la primera carta de la computadora (1-10):");
let computerCard2 = 5;
// let computerCard2 = console.log("Ingresa el valor de la segunda carta de la computadora (1-10):");

// let userHiddenCard = console.log("Ingresa el valor de la carta oculta que podría tomar el usuario (1-10):");
let userHiddenCard = 7;
// let computerHiddenCard = console.log("Ingresa el valor de la carta oculta de la computadora (1-10):");
let computerHiddenCard = 1;

// Mostrar cartas del usuario y ocultar una carta de la computadora
console.log("Tus cartas: " + userCard1 + ", " + userCard2);
console.log("La computadora ha recibido sus cartas.");

// Usuario decide si tomar la tercera carta
let takeHiddenCard = console.log("¿Quieres tomar la tercera carta?");
let userScore;

if (takeHiddenCard) {
    userScore = userCard1 + userCard2 + userHiddenCard;
} else {
    userScore = userCard1 + userCard2;
}

// Calcular puntajes
let computerScore = computerCard1 + computerCard2 + computerHiddenCard;

// Mostrar resultados
console.log("Tus cartas finales: " + userCard1 + ", " + userCard2 + (takeHiddenCard ? ", " + userHiddenCard : "") + " (Puntaje: " + userScore + ")");
console.log("Cartas finales de la computadora: " + computerCard1 + ", " + computerCard2 + ", " + computerHiddenCard + " (Puntaje: " + computerScore + ")");

// Determinar el ganador
let winner = '';

if (userScore > 21) {
    if (computerScore <= 21) {
        winner = "La computadora gana";
    } else {
        winner = "Ninguno gana";
    }
} else if (computerScore > 21) {
    if (userScore <= 21) {
        winner = "Tú ganas";
    } else {
        winner = "Ninguno gana";
    }
} else {
    if (userScore > computerScore) {
        winner = "Tú ganas";
    } else if (userScore < computerScore) {
        winner = "La computadora gana";
    } else {
        winner = "Es un empate";
    }
}

console.log(winner);

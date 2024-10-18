// Solicitar al usuario si la computadora emite un pitido al iniciarse
let beepsResponse = prompt("¿La computadora emite un pitido al iniciarse? (sí/no)");
let beeps = false;
if (beepsResponse === "sí" || beepsResponse === "Sí" || beepsResponse === "SI" || beepsResponse === "si" || beepsResponse === "sI" || beepsResponse === "Si") {
    beeps = true;
}

// Solicitar al usuario si el disco duro gira
let hardDriveSpinsResponse = prompt("¿El disco duro gira? (sí/no)");
let hardDriveSpins = false;
if (hardDriveSpinsResponse === "sí" || hardDriveSpinsResponse === "Sí" || hardDriveSpinsResponse === "SI" || hardDriveSpinsResponse === "si" || hardDriveSpinsResponse === "sI" || hardDriveSpinsResponse === "Si") {
    hardDriveSpins = true;
}

// Determinar el estado de la computadora y mostrar el mensaje correspondiente
if (beeps) {
    if (hardDriveSpins) {
        alert("Póngase en contacto con el técnico de apoyo.");
    } else {
        alert("Verificar contactos de la unidad.");
    }
} else {
    if (hardDriveSpins) {
        alert("Compruebe las conexiones de altavoces.");
    } else {
        alert("Traiga la computadora para repararla en la central.");
    }
}

// Ejercicio 1:
// El software que se desarrollará controlará un cajero automático (ATM) a través de una simulación usando el 
// lenguaje de programación JavaScript.
// El cajero automático atenderá a un cliente a la vez. Se le pedirá al cliente que ingrese su documento de 
// identidad y su pin de 4 dígitos, los cuales se enviarán al banco para su validación como parte de cada 
// transacción. El cliente podrá entonces realizar una o más transacciones. El menú se mostrará en la consola 
// hasta que el cliente indique que no desea realizar más transacciones.
// El cajero automático debe ser capaz de proporcionar los siguientes servicios al cliente:
// • Un cliente debe poder realizar un retiro de efectivo de cualquier cuenta vinculada al documento de 
// identidad, en múltiplos de $50000. Se debe obtener la aprobación del banco antes de entregar 
// efectivo.


// si la cedula y el pin 
// let usuarios=[

//     {
//         "cedula" : "1092455154",
//         "pin" : "1234",
//         "name" : "Miguel Angel Vargas Navarro",
//         "saldo" : "0"
        
//     },
    
//     {
//         "cedula" : "1093455154",
//         "pin" : "4356",
//         "name" : "Miguel Angel Vargas Navarro",
//         "saldo" : "0"
//     }
// ]




// let id = prompt("Documento De Identidad")

// let pin = prompt("Pin 4 digitod", "0000")



// for (let i = 0; i < usuarios.length; i++) {

//     let user = usuarios[i];

//     if(user.cedula === id && user.pin === pin){
//         let menu = alert("este es el menú")
//     }else {
//         alert("Cuenta no encontrada")
//     }
    
// };

// let retirar = (value) =>{

//     value

// }

// let transaccion = (username, cedula) => {

//     for (let i = 0; i < usuarios.length; i++) {

//         let user = usuarios[i];
    
//         if(user.cedula === cedula && user.name === username){

//             let valueret = prompt("ingrese el valor de la transaccion")

//             if (valueret > user.saldo) {

//                 alert("No tiene esa cantidad de dinero");

//             }else {

//                 let saldo = user.saldo -= valueret
//             }

//         }else {

//             alert("usuario no encontrado");
            
//         }
        
//     }
// };




const cuentas = [
    { id: '1234', pin: '0000', saldo: 100000, cuentas: [50000, 70000] },
    { id: '5678', pin: '1234', saldo: 200000, cuentas: [20000, 80000] }
  ];
  
  const validarPin = (cuenta, pin) => cuenta.pin === pin;
  
  const menu = () => {
    console.log("1. Retiro");
    console.log("2. Depósito");
    console.log("3. Transferencia");
    console.log("4. Consulta de saldo");
    console.log("5. Salir");
  };
  
  const realizarTransaccion = (cuenta) => {
    let continuar = true;
  
    while (continuar) {
      menu();
      const opcion = prompt("Elija una opción: ", "1 : Retiro, 2 : Deposito, 3 : Transferencia, 4 : consultar saldo, 5 : Salir ");
  
      switch (opcion) {
        case '1': // Retiro
          const montoRetiro = parseInt(prompt("Ingrese monto a retirar (múltiplos de 50000): "));
          if (montoRetiro % 50000 === 0 && cuenta.saldo >= montoRetiro) {
            cuenta.saldo -= montoRetiro;
            console.log(`Retiro exitoso. Puede tomar ${montoRetiro} de la bandeja principal.`);
          } else {
            console.log("Monto no válido o saldo insuficiente.");
          }
          break;
          
        case '2': // Depósito
          const montoDeposito = parseInt(prompt("Ingrese monto a depositar: "));
          const tipo = prompt("Es efectivo o cheque? ");
          if (montoDeposito > 0) {
            cuenta.saldo += montoDeposito;
            console.log(`Depósito exitoso. Tipo: ${tipo}`);
          } else {
            console.log("Monto no válido.");
          }
          break;
          
        case '3': // Transferencia
          const cuentaDestino = prompt("Ingrese ID de la cuenta destino: ");
          const montoTransferencia = parseInt(prompt("Ingrese monto a transferir: "));
          const destinoCuenta = cuentas.find(c => c.id === cuentaDestino);
          
          if (destinoCuenta && montoTransferencia > 0 && cuenta.saldo >= montoTransferencia) {
            cuenta.saldo -= montoTransferencia;
            destinoCuenta.saldo += montoTransferencia;
            console.log("Transferencia exitosa.");
          } else {
            console.log("Cuenta destino inválida o saldo insuficiente.");
          }
          break;
          
        case '4': // Consulta de saldo
          console.log(`Saldo actual: ${cuenta.saldo}`);
          break;
          
        case '5': // Salirs
          continuar = false;
          console.log("Gracias por usar el cajero automático.");
          break;
          
        default:
          console.log("Opción inválida.");
          break;
      }
    }
  };
  
  // Simulación de uso
  const id = prompt("Ingrese su documento de identidad: ");
  const pin = prompt("Ingrese su PIN de 4 dígitos: ");
  const cuenta = cuentas.find(c => c.id === id);
  
  if (cuenta && validarPin(cuenta, pin)) {
    realizarTransaccion(cuenta);
  } else {
    console.log("PIN inválido.");
  }
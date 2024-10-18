const colaDeEspera = [];
let contadorTurnos = 0;

const tomarTurno = () => {
  contadorTurnos++;
  const turno = contadorTurnos;
  colaDeEspera.push(turno);
  console.log(`Turno tomado: ${turno}`);
};

const llamarCliente = () => {
  if (colaDeEspera.length > 0) {
    const turno = colaDeEspera.shift();
    console.log(`Llamando al cliente con turno: ${turno}`);
  } else {
    console.log("No hay clientes en la cola de espera.");
  }
};

const mostrarCola = () => {
  console.log("Cola de espera actual: ", colaDeEspera);
};

const mostrarContadorTurnos = () => {
  console.log(`Número total de turnos tomados: ${contadorTurnos}`);
};

// Ejemplo de uso
tomarTurno();
tomarTurno();
mostrarCola();
llamarCliente();
mostrarCola();
mostrarContadorTurnos();

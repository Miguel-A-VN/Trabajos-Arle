const habitaciones = {
    individual: { total: 10, ocupadas: 0 },
    doble: { total: 10, ocupadas: 0 },
    familiar: { total: 10, ocupadas: 0 }
  };
  
  const reservas = [];
  
  const reservarHabitacion = (nombre, pais, tipo, personas, mascotas) => {
    if (personas <= 2 && tipo === 'individual' ||
        personas <= 4 && tipo === 'doble' ||
        personas <= 6 && tipo === 'familiar') {
          
      if (habitaciones[tipo].ocupadas < habitaciones[tipo].total) {
        if (tipo === 'familiar' || !mascotas) {
          habitaciones[tipo].ocupadas++;
          reservas.push({ nombre, pais, tipo, personas, mascotas });
          console.log("Reserva realizada con éxito.");
        } else {
          console.log("Las mascotas solo se aceptan en habitaciones familiares.");
        }
      } else {
        console.log("No hay habitaciones disponibles.");
      }
    } else {
      console.log("Número de personas excede el límite.");
    }
  };
  
  const mostrarReservas = () => {
    console.log("Reservas actuales:");
    reservas.forEach(reserva => {
      console.log(`Nombre: ${reserva.nombre}, País: ${reserva.pais}, Tipo: ${reserva.tipo}, Personas: ${reserva.personas}, Mascotas: ${reserva.mascotas}`);
    });
  };
  
  const contarHabitacionesReservadas = () => {
    let total = 0;
    for (const tipo in habitaciones) {
      total += habitaciones[tipo].ocupadas;
    }
    console.log(`Habitaciones reservadas en total: ${total}`);
  };
  
  // Ejemplo de uso
  reservarHabitacion("Juan Pérez", "Argentina", "individual", 2, false);
  reservarHabitacion("Ana Gómez", "Chile", "familiar", 5, true);
  mostrarReservas();
  contarHabitacionesReservadas();
  
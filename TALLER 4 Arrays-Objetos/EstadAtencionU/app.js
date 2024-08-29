const estadisticas = {
    totalAtendidos: 0,
    porTipo: {
      llamada: 0,
      asesoria: {
        estudiante: 0,
        directivo: 0
      }
    }
  };
  
  const atenderUsuario = (cedula, tipoAtencion, tipoAsesoria) => {
    if (tipoAtencion === 'asesoria') {
      if (tipoAsesoria === 'estudiante' || tipoAsesoria === 'directivo') {
        estadisticas.totalAtendidos++;
        estadisticas.porTipo.asesoria[tipoAsesoria]++;
      } else {
        console.log("Tipo de asesoría inválido.");
        return;
      }
    } else if (tipoAtencion === 'llamada') {
      estadisticas.totalAtendidos++;
      estadisticas.porTipo.llamada++;
    } else {
      console.log("Tipo de atención inválido.");
      return;
    }
    console.log(`Atendido: ${cedula}. Tipo: ${tipoAtencion}${tipoAsesoria ? ', Asesoría: ' + tipoAsesoria : ''}.`);
  };
  
  const mostrarEstadisticas = () => {
    console.log(`Total de usuarios atendidos: ${estadisticas.totalAtendidos}`);
    console.log(`Usuarios atendidos por tipo:`);
    console.log(`- Llamada: ${estadisticas.porTipo.llamada}`);
    console.log(`- Asesoría Estudiante: ${estadisticas.porTipo.asesoria.estudiante}`);
    console.log(`- Asesoría Directivo: ${estadisticas.porTipo.asesoria.directivo}`);
  };
  
  // Ejemplo de uso
  atenderUsuario('12345678', 'asesoria', 'estudiante');
  atenderUsuario('87654321', 'llamada');
  mostrarEstadisticas();
  
function calcularMontoCheque(numDiasViaje) {
    const costoHotelPorDia = 1000; 
    const costoComidaPorDia = 500; 
    const otrosGastosPorDia = 200; 
  
    
    const montoHotel = costoHotelPorDia * numDiasViaje;
    const montoComida = costoComidaPorDia * numDiasViaje;
    const montoOtrosGastos = otrosGastosPorDia * numDiasViaje;
  
    
    const montoTotalCheque = montoHotel + montoComida + montoOtrosGastos;
  
    return {
      hotel: montoHotel,
      comida: montoComida,
      otrosGastos: montoOtrosGastos,
      total: montoTotalCheque,
    };
  }
  
  
  const numDiasViajeUsuario = parseInt(prompt("Ingresa el número de días de viaje:"));
  
  if (isNaN(numDiasViajeUsuario) || numDiasViajeUsuario <= 0) {
    console.log("Por favor, ingresa un número válido de días de viaje.");
  } else {
    const montoCheque = calcularMontoCheque(numDiasViajeUsuario);
    console.log(`El monto del cheque será desglosado de la siguiente manera:
  Hotel: $${montoCheque.hotel}
  Comida: $${montoCheque.comida}
  Otros gastos: $${montoCheque.otrosGastos}
  Total: $${montoCheque.total}`);
  }
  
  
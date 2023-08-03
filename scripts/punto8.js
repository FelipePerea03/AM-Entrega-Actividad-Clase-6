function ahorroAnual(sueldoMensual) {
    const semanasPorMes = 4;
    const porcentajeAhorro = 0.15; 
    const mesesEnAnio = 12;
  
    
    const ahorroSemanal = sueldoMensual * porcentajeAhorro;
  
    
    const ahorroMensual = ahorroSemanal * semanasPorMes;
  
    
    const ahorroAnual = ahorroMensual * mesesEnAnio;
  
    return ahorroAnual;
  }
  
  
  const sueldoMensualUsuario = parseFloat(prompt("Ingresa tu sueldo mensual:"));
  
  if (isNaN(sueldoMensualUsuario)) {
    console.log("Por favor, ingresa un valor numérico válido.");
  } else {
    const ahorroTotalAnual = ahorroAnual(sueldoMensualUsuario);
    prompt(`El ahorro anual sería: $${ahorroTotalAnual.toFixed(2)}`);
  }

  
function calcularFormasDePago(valorTotal) {
    const cuota1 = valorTotal;
    const cuota2 = valorTotal * 1.05; 
    const cuota6 = valorTotal * 1.40; 
  
    const resultado = `Opciones de pago:
    1 cuota de $${cuota1.toFixed(2)} (0% de recargo)
    2 cuotas de $${(cuota2 / 2).toFixed(2)} total $${cuota2.toFixed(2)} (5% de recargo)
    6 cuotas de $${(cuota6 / 6).toFixed(2)} total $${cuota6.toFixed(2)} (40% de recargo)`;
  
    return resultado;
  }
  
  
  const valorTotalCompra = parseFloat(prompt("Ingresa el valor total de la compra:"));
  
  if (isNaN(valorTotalCompra) || valorTotalCompra < 0) {
    console.log("Por favor, ingresa un valor numérico válido y positivo para el valor total de la compra.");
  } else {
    const formasDePago = calcularFormasDePago(valorTotalCompra);
    console.log(formasDePago);
  }
  
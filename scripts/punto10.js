function areaCuadrado(lado) {
    if (lado <= 0) {
      return "El lado del cuadrado debe ser un número positivo mayor que cero.";
    }
  
    const area = lado * lado;
    return area;
  }
  
  
  const ladoCuadradoUsuario = parseFloat(prompt("Ingresa la longitud del lado del cuadrado:"));
  
  if (isNaN(ladoCuadradoUsuario)) {
    console.log("Por favor, ingresa un valor numérico válido.");
  } else {
    const areaDelCuadrado = areaCuadrado(ladoCuadradoUsuario);
    console.log(`El área del cuadrado es: ${areaDelCuadrado}`);
  }
  
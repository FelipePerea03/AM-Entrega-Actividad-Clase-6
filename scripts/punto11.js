function calcularPromedio(examen1, examen2, examen3) {
    const ponderacionExamen1 = 0.25;
    const ponderacionExamen2 = 0.25;
    const ponderacionExamen3 = 0.50;
  
    if (examen1 < 0 || examen2 < 0 || examen3 < 0) {
      return "Los puntajes de los exámenes deben ser valores no negativos.";
    }
  
    const promedio =
      examen1 * ponderacionExamen1 +
      examen2 * ponderacionExamen2 +
      examen3 * ponderacionExamen3;
  
    return promedio;
  }
  
  
  const examen1Usuario = parseFloat(prompt("Ingresa el puntaje del primer examen:"));
  const examen2Usuario = parseFloat(prompt("Ingresa el puntaje del segundo examen:"));
  const examen3Usuario = parseFloat(prompt("Ingresa el puntaje del tercer examen:"));
  
  if (isNaN(examen1Usuario) || isNaN(examen2Usuario) || isNaN(examen3Usuario)) {
    console.log("Por favor, ingresa valores numéricos válidos para los exámenes.");
  } else {
    const promedioAlumno = calcularPromedio(examen1Usuario, examen2Usuario, examen3Usuario);
    console.log(`El promedio del alumno es: ${promedioAlumno}`);
  }
  
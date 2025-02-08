const historialConsultas = [];

function mostrarClimaActual() {
    let ciudad = prompt("Ingrese el nombre de su ciudad");
    let clima = "25°C con cielo despejado";
    historialConsultas.push("Consulta: Clima en:" + ciudad);
    alert(" El clima en " + ciudad + " es de " + clima);
}
mostrarClimaActual();

function mostrarPronostico() {
    let dias;

    while (true) {
        dias = parseInt(prompt("¿Cuántos días de pronóstico desea ver? (Máximo 5 días)"));
    
     if (!isNaN(dias) && dias >= 1 && dias <= 5) {
         break;
    }
    alert("Por favor, ingresa un número válido entre 1 y 5.");
  }
    const pronostico = ["Soleado","Nublado","Lluvia intensa","Tormenta Eléctrica","Soleado"];
    let resultado = pronostico.slice(0, dias);
    historialConsultas.push("Consulta: Pronóstico para " + dias + " días ");

    alert("Pronóstico para los proximos " + dias + " días:\n" + resultado.join("\n"));
}
mostrarPronostico();
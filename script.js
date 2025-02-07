const historialConsultas = [];

function mostrarClimaActual() {
    let ciudad = prompt("Ingrese el nombre de su ciudad");
    let clima = "25°C con cielo despejado";
    historialConsultas.push("Consulta: Clima en:" + ciudad);
    
    alert(" El clima en " + ciudad + " es de " + clima);
}
mostrarClimaActual();
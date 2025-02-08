const historialConsultas = [];

function mostrarClimaActual() {
    let ciudad;

    while (true) {
        ciudad = prompt("Ingrese el nombre de su ciudad:");
    
    if (ciudad === null || ciudad.length === 0) {
        return;
    }

    if (isNaN(parseInt(ciudad))) {
        break;
    }
    alert("Por favor, ingresa un nombre de ciudad válido.");
    }

    let clima = "25°C con cielo despejado.";
    historialConsultas.push("Consulta: Clima en " + ciudad);
    alert(" El clima en " + ciudad + " es de " + clima);
}

function mostrarPronostico() {
    let dias;

    while (true) {
        dias = prompt("¿Cuántos días de pronóstico desea ver? (Máximo 5 días)");

        if (dias === null || dias.length === 0) {
            return;
        }

        dias = parseInt(dias);
    
        if (!isNaN(dias) && dias >= 1 && dias <= 5) {
            break;
    }
    alert("Por favor, ingresa un número válido entre 1 y 5.");
  }
    const pronostico = ["Soleado","Nublado","Lluvia intensa","Tormenta Eléctrica","Soleado"];
    let resultado = pronostico.slice(0, dias);
    historialConsultas.push("Consulta: Pronóstico para " + dias + " días");

    alert("Pronóstico para los proximos " + dias + " días:\n" + resultado.join("\n"));
}

function conversorTemperatura() {
    let celsius;
    while (true) {
        celsius = prompt("Ingrese la temperatura en Celsius:");
        if (celsius === null || celsius.length === 0) {
            return;
        }

        celsius = parseFloat(celsius);

        if (!isNaN(celsius)) {
            break;
        }
        alert("Por favor, ingresa un número válido.");
    }

    let fahrenheit = (celsius *9/5) + 32;
    historialConsultas.push("Conversión: " + celsius + "°C a " + fahrenheit + "°F");
    alert("La temperatura en Fahrenheit es de: " + fahrenheit + "°F");
}

const verHistorial = () => {
    if (historialConsultas.length === 0) {
        alert("El historial de consultas está vacío.");
    } else {
        alert("Historial de consultas:\n\n" + historialConsultas.join("\n"));
    }
};

let opcion;
do{
    opcion = prompt("¡Bienvenido al simulador del estado del tiempo!\nSelecciona el número de la opción deseada: \n\n 1. Mostrar clima actual. \n 2. Mostrar pronóstico de los próximos días. \n 3. Convertir de Celsius a Fahrenheit. \n 4. Ver historial de consultas. \n\n Ingrese 0 para salir. ");

    if (opcion === null) {
        alert("Gracias por usar el simulador del clima. 🌦️ ¡Vuelva pronto!");
        break;
    }

    opcion = parseInt(opcion);

    switch (opcion) {
        case 1:
            mostrarClimaActual();
            break;
        case 2:
            mostrarPronostico();
            break;
        case 3:
            conversorTemperatura();
            break;
        case 4:
            verHistorial();
            break;
        case 0:
            alert("Gracias por usar el simulador del clima. 🌦️ ¡Vuelva pronto!");
            break;
    }
} while (opcion !== 0);
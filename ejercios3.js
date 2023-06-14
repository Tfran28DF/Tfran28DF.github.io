// Solicitar al usuario ingresar los kilómetros recorridos
var kilometrosRecorridos = parseFloat(
  prompt("Por favor, ingresa la cantidad de kilómetros recorridos:")
);

// Solicitar al usuario ingresar los litros de combustible consumidos
var litrosCombustible = parseFloat(
  prompt("Por favor, ingresa la cantidad de litros de combustible consumidos:")
);

// Calcular el consumo de combustible por kilómetro
var consumoPorKilometro = litrosCombustible / kilometrosRecorridos;

// Mostrar el resultado en pantalla
alert(
  "El consumo de combustible por kilómetro es: " +
    consumoPorKilometro.toFixed(2)
);
document.write("Tú consumo fue de; " + consumoPorKilometro);

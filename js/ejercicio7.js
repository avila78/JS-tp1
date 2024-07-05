const numero1 = parseInt(prompt("Ingresa el primer número"));
const numero2 = parseInt(
  prompt("Ingresa el segundo número, distinto del primero")
);
const numero3 = parseInt(
  prompt("Ingresa el último número, distintos a los otros dos")
);
if (numero1 > numero2 && numero1 > numero3) {
  document.write(`El ${numero1} es el mas grande`);
} else if (numero2 > numero1 && numero2 > numero3) {
  document.write(`El ${numero2} es el mas grande`);
} else {
  document.write(`El ${numero3} es el mas grande`);
}

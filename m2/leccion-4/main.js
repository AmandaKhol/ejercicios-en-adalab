"use strict";

// EJERCICIO 1

function mult(a, b) {
  const result = a * b;
  return result;
}

console.log("El resultado de multiplicar 2 por 2: " + mult(2, 2));
console.log("El resultado de multiplicar 5 por 2: " + mult(5, 2));
console.log(`El resultado de multiplicar 5 por 3: ${mult(5, 3)}`);

//EJERCICIO 2

function average(a, b, c, d) {
  const result = (a + b + c + d) / 4;
  return result;
}

console.log("El resultado de la media de 2, 2, 2, 2: " + average(2, 2, 2, 2));
console.log("El resultado de la media de 2, 3, 5, 7: " + average(2, 3, 5, 7));
console.log("El resultado de la media de 1, 2, 6, 20: " + average(1, 2, 6, 20));

// EJERCICIO 8
// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}
console.log(secretLetter);
console.log(mySecretLetter());
//porque antes era y, lo ha impreso por pantalla y luego
//ha ejecutado el cambio con la función

// EJERCICIO 9
const averageEje9 = (a, b, c, d) => (a + b + c + d) / 4;

console.log(
  "El resultado de la media de 2, 2, 2, 2: " + averageEje9(2, 2, 2, 2)
);

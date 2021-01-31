"use strict";

// EJERCICIO 1
function get100Numbers() {
  let array = [];
  for (let i = 1; i < 101; i += 1) {
    array.push(i);
  }

  return array;
}
const array100Numbers = get100Numbers();
console.log(array100Numbers);
console.log(`Longitud: ${array100Numbers.length}`);

// EJERCICIO 2

function getReversed100Numbers() {
  let arrayReverse = get100Numbers().reverse();
  return arrayReverse;
}

const arrayReverse = getReversed100Numbers();
console.log(arrayReverse);

// EJERCICIO 3
const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNomber() {
  const lostNumbers = [4, 8, 15, 16, 23, 42];
  let arrayEven = [];
  let array3Module = [];
  for (let number of lostNumbers) {
    if (number % 2 === 0) {
      arrayEven.push(number);
    }
    if (number % 3 === 0) {
      array3Module.push(number);
    }
  }
  return arrayEven.concat(array3Module);
}

console.log("Ejercicio 3: " + bestLostNomber());

// EJERCICIO 4
const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

// EJERCICIO 5 BONUS

function christmasTree(rowsNumber) {
  let row = "";
  for (let i = 0; i < rowsNumber; i++) {
    row += "▲";
    console.log(row);
  }
}

christmasTree(5);

// EJERCICIO 6 BONUS
function christmasTreeStar(rowsNumber) {
  let row = "";
  console.log("★");
  for (let i = 0; i < rowsNumber; i++) {
    row += "▲";
    console.log(row);
  }
  console.log("|");
}

christmasTreeStar(5);

// EJERCICIO 7 BONUS

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

const countElement = document.querySelector(".js-count");
const listElement = document.querySelector(".js-list");

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];
// Mostrar una frase que indique cuántas tareas hay
countElement.innerHTML = `Tenemos ${tasks.length} tareas`;

// Mostras solo las tarea
let html = "";
for (const oneTask of tasks) {
  html += `<li>${oneTask.name}</li>`;
}

listElement.innerHTML = html;

// Tachar las completadas
let html2 = "";
for (const oneTask of tasks) {
  if (oneTask.completed) {
    html2 += `<li class="crossoff">`;
  } else {
    html2 += `<li>`;
  }

  html2 += oneTask.name;
  html2 += `</li>`;

  /*   html += `<li ${oneTask.completed ? 'class="crossoff"' : ""}>${
    oneTask.name
  }</li>`; */
}

listElement.innerHTML += html2;

// marcar el checkbox

let html3 = "";
for (const oneTask of tasks) {
  if (oneTask.completed) {
    html3 += `<li class="crossoff">`;
  } else {
    html3 += `<li>`;
  }
  html3 += `<input type="checkbox" ${
    oneTask.completed ? `checked="checked"` : ""
  }/>`;
  html3 += oneTask.name;
  html3 += `</li>`;
}

listElement.innerHTML += html3;

const renderList = () => {
  let html = "";
  for (const oneTask of tasks) {
    if (oneTask.completed) {
      html += `<li class="crossoff">`;
    } else {
      html += `<li>`;
    }
    html += `<input type="checkbox" ${
      oneTask.completed ? `checked="checked"` : ""
    }/>`;
    html += oneTask.name;
    html += `</li>`;
  }

  listElement.innerHTML += html;
};

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

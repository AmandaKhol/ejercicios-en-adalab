"use strict";

// EJERCICIO 1

// EJERCICIO 2
for (let i = 1; i < 11; i++) {
  console.log("Voy por la vuelta " + i);
}

// EJERCICIO 3
let acc = 0;
for (let i = 0; i < 10; i++) {
  acc += 2;
  console.log("El resultado es:  " + acc);
}

// EJERCICIO 4

// EJERCICIO 5

const numbers = [2, 3, 83, 34, 48];
let accEje5 = 0;

function average(numbers) {
  let accEje5 = 0;
  for (let i = 0; i < numbers.length; i++) {
    accEje5 += numbers[i];
  }
  let result = accEje5 / numbers.length;
  console.log("average: " + result);
  return result;
}

const resultEje5 = average(numbers);

// EJERCICIO 6

const input1 = document.querySelector(".js-input--1");
const input2 = document.querySelector(".js-input--2");
const form = document.querySelector(".form");

function handlePrintFilms(event) {
  const arrayFilms = [input1.value, input2.value];
  for (const movie of arrayFilms) {
    console.log(`A mi también me encantó "${movie}"`);
    event.preventDefault(); //así no me recarga la página de nuevo al terminar el submit
  }
}

form.addEventListener("submit", handlePrintFilms);

// EJERCICIO 7
const adalabers = [
  {
    name: "María",
    age: 29,
    job: "diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    job: "ingeniera química",
  },
  {
    name: "Susana",
    age: 34,
    job: "periodista",
  },
  {
    name: "Rocío",
    age: 25,
    job: "actriz",
  },
  {
    name: "Inmaculada",
    age: 21,
    job: "diseñadora",
  },
];

function countAdalabers(adalabersArray) {
  const result = adalabersArray.length;

  return result;
}

console.log(`Total adalabers: ${countAdalabers(adalabers)}`);

function averageAge(adalabersArray) {
  let sumAge = 0;
  for (const adalaber of adalabersArray) {
    sumAge += adalaber.age;
  }
  const result = sumAge / adalabersArray.length;
  return result;
}

console.log(`Media edad adalabers: ${averageAge(adalabers)}`);

function theYoungest(adalabersArray) {
  let agesArray = [];
  for (const adalaber of adalabersArray) {
    agesArray.push(adalaber.age);
  }
  const minAge = Math.min(...agesArray);
  //también válido
  const minAgeApply = Math.min.apply(Math, agesArray);
  const theYoungestIndex = agesArray.indexOf(minAge);
  return adalabersArray[theYoungestIndex].name;
}

console.log(`La adalaber más jóven es: ${theYoungest(adalabers)}`);

function countDesigners(adalabersArray) {
  let countDesigners = 0;
  for (const adalaber of adalabersArray) {
    if (adalaber.job === "diseñadora") {
      countDesigners += 1;
    } else {
    }
  }
  return countDesigners;
}

console.log(`En esta promoción hay ${countDesigners(adalabers)} diseñadoras`);

// EJERCICIO 8
const alarmButton = document.querySelectorAll(".js-alarm");
const alarmContainer = document.querySelector(".eje8");

function handleAlarm() {
  alarmContainer.classList.toggle("activated");
}
for (let i = 0; i < alarmButton.length; i++) {
  alarmButton[i].addEventListener("click", handleAlarm);
}

// EJERCICIO 10
const items = [
  "Ada",
  1815,
  ["Informática", "Matemática", "Escritora"],
  {
    mother: "Anna Isabella",
    father: "Lord Byron",
  },
];

function listData(items) {
  for (let i = 0; i < items.length; i++) {
    const message2 =
      "El dato " +
      JSON.stringify(items[i]) +
      " está en la posición " +
      i +
      " y es de tipo " +
      typeof items[i];

    const message = `El dato ${
      items[i]
    } está en la posición ${i} y es de tipo ${typeof items[i]}`;
    console.log(message2);
  }
}

listData(items);

"use strict";
//Ejercicio 2

const superWave = document.querySelector(".super-wave");
console.log("PRIMERO", superWave);
console.log("PRIMERO", superWave.classList);

superWave.classList.add("superWave");

console.log(superWave.classList);
console.log(superWave);
console.log(superWave);

console.log(superWave);

//Ejercicio 6
const nameCollegue = "Maria";
console.log("Hola " + nameCollegue + ", encantada de conocerte.");

// Ejercicio 7
const collegueName = "Lola";
console.log(`Hola ${collegueName}, encantada de conocerte.`);

//Ejercicio 8
const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

const contentOne = `<img class="imagen" src="${firstDogImage}" alt="">
<p>${firstDogName}</p>`;
const contentTwo = `<img src="${secondDogImage}" alt="">
<p>${secondDogName}</p>`;
const contentThree = `<img src="${thirdDogImage}" alt="">
<p>${thirdDogName}</p>`;

const itemOne = document.querySelector(".list__item--1");
const itemTwo = document.querySelector(".list__item--2");
const itemThree = document.querySelector(".list__item--3");

itemOne.innerHTML = contentOne;
itemTwo.innerHTML = contentTwo;
itemThree.innerHTML = contentThree;

//Ejercicio 9
const nameCollegue9 = "Irene Mañas";
const contentEj9 = document.querySelector(".ejer9");

contentEj9.innerHTML =
  `El nombre de mi compañera es ${nameCollegue9}, y está compuesto por ` +
  nameCollegue9.length +
  "caracteres";

//Ejercicio 10
const contentEj10 = document.querySelector(".ejer10");
const age = parseInt(contentEj10.innerHTML);
console.log(typeof age);

/* setTimeout(() => superWave.classList.add("superWave"), 65); */

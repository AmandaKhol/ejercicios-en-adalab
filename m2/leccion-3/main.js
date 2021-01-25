"use strict";

// EJERCICIO 1

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

//paso 1
const imageContent = document.querySelector(".user__avatar");
imageContent.src = userAvatar;

//paso 2
userAvatar = "";

//paso 3
imageContent.src = userAvatar || DEFAULT_AVATAR;

// EJERCICIO 2

const parag3 = document.querySelector(".valid-name");

const validName1 = "Irene";
const validName2 = "Amanda";
const accessName = "Irene";

if (accessName === validName1 || accessName === validName2) {
  parag3.innerHTML = `Bienvenida, ${accessName}`;
} else {
  parag3.innerHTML =
    "Lo siento pero el usuario que has introducido no está registrado";
}

// EJERCICIO 3

const variableEj3 = 123123125;

if (variableEj3 === 0) {
  console.log("El número es 0");
} else if (variableEj3 < 0) {
  console.log("El número es negativo");
} else if (variableEj3 + 2 > 13 && variableEj3 + 2 <= 20) {
  console.log("El número más 2 es mayor que 13 pero menor o igual que 20");
} else if (variableEj3 > 20 && variableEj3 < 50) {
  console.log("El número es mayor que 20 pero menor que 50");
} else {
  console.log("el número no es 123123125");
}

// EJERCICIO 4

const firstYearDog = 15;
const secondYearDog = 9;
const restYearDog = 5;

const humanYear = 5;
let result = 0;

if (humanYear === 1) {
  result = firstYearDog;
  console.log("La edad del perro es: " + result);
} else if (humanYear === 2) {
  result = secondYearDog + firstYearDog;
  console.log("La edad del perro es: " + result);
} else {
  result = secondYearDog + firstYearDog + (humanYear - 2) * restYearDog;
  console.log("La edad del perro es: " + result);
}

// EJERCICIO 5
const ejer5 = document.querySelector(".ejercicio5");

if (ejer5.classList.contains("warning")) {
  ejer5.innerHTML = `<h3>AVISO</h3>
  <p>Tenga cuidado</p>`;
} else if (ejer5.classList.contains("error")) {
  ejer5.innerHTML = `<h3>ERROR</h3>
  <p>Ha surgido un error</p>`;
} else if (ejer5.classList.contains("succes")) {
  ejer5.innerHTML = `<h3>CORRECTO</h3>
  <p>Los datos son correctos</p>`;
} else {
}

// EJERCICIO 6
let avocados;
const avocadoPrice = 1.5;
const money = 33;

/* if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
} */

money >= avocadoPrice ? (avocados = money / avocadoPrice) : (avocados = 0);

console.log(avocados);

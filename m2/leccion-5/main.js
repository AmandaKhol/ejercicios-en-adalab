"use strict";

// EJERCICIO 1
const button = document.querySelector(".accion");
const paragraph = document.querySelector(".message");

function changeParagraph() {
  paragraph.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

button.addEventListener("click", changeParagraph);

//EJERCICIO 2
const buttonEje2 = document.querySelector(".eje2");
const inputName = document.querySelector(".fname");

function printName() {
  console.log(`Hola ${inputName.value}`);
}

buttonEje2.addEventListener("click", printName);

//EJERCICIO 3
let divEje3 = document.querySelector(".eje3");
const paragraphEje3 = document.querySelector(".eje3__paragraph");

function addParagraph() {
  //divEje3.innerHTML += divEje3.innerHTML; //no me gusta porque no uso el parrafo en sí
  // divEje3.innerHTML += paragraphEje3; ????
  divEje3.innerHTML += paragraphEje3.outerHTML;
}

paragraphEje3.addEventListener("mouseover", addParagraph);

//EJERCICIO 4
const divEje4 = document.querySelector(".eje4basic");
const pixelsChange = 250;

function handleChangeColor() {
  if (window.scrollY > pixelsChange) {
    divEje4.classList.add("eje4scroll");
  } else {
    divEje4.classList.remove("eje4scroll");
  }
}

window.addEventListener("scroll", handleChangeColor);

//EJERCICIO 5
const pageSelector = document.querySelector(".page");

function handleColorKeyboard(event) {
  console.log(event);
  if (event.target.id === "page") {
    if (event.key === "r") {
      pageSelector.classList.toggle("pageR");
    } else if (event.key === "m") {
      pageSelector.classList.toggle("pageM");
    } else {
    }
  }
}

pageSelector.addEventListener("keyup", handleColorKeyboard);

/* const handleElement = document.querySelector ('.document'); 
console.log(handleElement)
function changeElement(event) {
  if (event.key === 'r') {
    handleElement.classList.add('documentR')
    handleElement.classList.remove('documentM')
  } else if (event.key === 'm') {
    handleElement.classList.add('documentM')
    handleElement.classList.remove('documentR')
  }
  console.log(event.key);
}
handleElement.addEventListener('keydown', changeElement); */

//EJERCICIO 6
const eje6input = document.querySelector(".eje6input");
let eje6parag = document.querySelector(".eje6parag");

function handleWriteParagraph(event) {
  console.log(event.currentTarget);
  eje6parag.innerHTML += event.currentTarget.value;
}

function handleResetValueInput(event) {
  event.currentTarget.value = "";
}

eje6input.addEventListener("change", handleWriteParagraph);
eje6input.addEventListener("blur", handleResetValueInput);

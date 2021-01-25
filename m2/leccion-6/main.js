"use strict";

// EJERCICIO 1
//EJERCICIO 1

const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
};

const paragraph = document.querySelector(".eje1__paragraph");

paragraph.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`;

//EJERCICIO 2

adalaber1.run = () => console.log("Estoy corriendo");
adalaber1.runMarathon = (distance) =>
  console.log(`Estoy corriendo una maratón de ${distance} kilómetros`);

adalaber1.run();
adalaber1.runMarathon(50);

//EJERCICIO 3
adalaber1.showBio = function () {
  console.log(
    `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`
  );
};

adalaber1.showBio();

//EJERCICIO 4

const button = document.querySelector(".accion");

function handleLoggEvent(event) {
  console.log(event);
  console.log(event.type); //es una propiedad
}

button.addEventListener("click", handleLoggEvent);

//EJERCICIO 5
const input = document.querySelector(".js-input");

function handleInputContent(event) {
  console.dir(input);
}

input.addEventListener("keyup", handleInputContent);

//EJERCICIO 7
const user = {};

const job = "developer";
user.firstName = "Irene";
user.lastName = "Mañas";
user.age = 50;
user.job = job;

console.log(user);
console.log(user.firstName);
user.firstName = "MariCarmen";
user.age++;
console.log(user);
console.log(user.firstName);
console.log(user.age);

"use strict";

//EJERCICIO 1

const character = document.querySelector(".character");
const search = document.querySelector(".search");
const form = document.querySelector(".form")
const list = document.querySelector(".js__results")

function handleSubmit(ev) {
  ev.preventDefault();
}

function handleSearch() {
  const characterName = character.value;
  searchCharacter(characterName);
}

function completeList(arrayCharacters) {
  list.innerHTML = "";
  for (let character of arrayCharacters) {
    list.innerHTML += `<li>`;
    list.innerHTML += `Name: ${character.name}, `;
    list.innerHTML += ` Gender: ${character.gender}`;
    list.innerHTML += `</li>`;
  }
  }


function searchCharacter(name) {
  fetch(`https://swapi.dev/api/people/?search=${name}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    completeList(data.results)

  });
}

form.addEventListener("submit", handleSubmit);
search.addEventListener("click", handleSearch);

// EJERCICIO 4

const nameUser = document.querySelector(".name");
const paragraph = document.querySelector(".paragraph");
const complete = document.querySelector(".complete");
const savedData = localStorage.getItem('userName');

function handleComplete() {
    const content = nameUser.value;
    paragraph.innerHTML = content;
    localStorage.setItem('nameUser', content);
  
}

function lookStorageData() {
  const savedData = localStorage.getItem('nameUser');
  if (savedData) {
    paragraph.innerHTML = savedData;
    nameUser.value = savedData;
  }
}

lookStorageData();

console.log(localStorage.getItem('nameUser'));
nameUser.addEventListener("keyup", handleComplete);

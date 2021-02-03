/* eslint-disable no-console */
'use strict';

//EJERCICIO 2

const character = document.querySelector('.character');
const search = document.querySelector('.search');
const form = document.querySelector('.form');
const list = document.querySelector('.js__results');


//helper functions
function searchCharacter(name) {
  fetch(`https://swapi.dev/api/people/?search=${name}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      completeList(data.results);
    });
}

function completeList(arrayCharacters) {
  list.innerHTML = '';
  for (let character of arrayCharacters) {
    list.innerHTML += `<li>Name: ${character.name}, Gender: ${character.gender} </li>`;
  }
}

// handles
function handleSubmit(ev) {
  ev.preventDefault();
}

function handleSearch() {
  const characterName = character.value;
  searchCharacter(characterName);
}

form.addEventListener('submit', handleSubmit);
search.addEventListener('click', handleSearch);

// EJERCICIO 4

const nameUser = document.querySelector('.name');
const paragraph = document.querySelector('.paragraph');
const clean = document.querySelector('.js-clean');

function handleComplete() {
  const content = nameUser.value;
  paragraph.innerHTML = content;
  localStorage.setItem('nameUser', content);
}

function handleCleanStorage() {
  localStorage.clear();
}

lookStorageData();

function lookStorageData() {
  const savedData = localStorage.getItem('nameUser');
  if (savedData) {
    paragraph.innerHTML = savedData;
    nameUser.value = savedData;
  }
}

console.log(localStorage.getItem('nameUser'));
nameUser.addEventListener('keyup', handleComplete);

clean.addEventListener('click', handleCleanStorage);


// BONUS
/* 
fetch('https://api.github.com/repositories?since=asdf')
  .then(response => {
    if (!response.ok) {
      throw response;
    }
    return response.json();
  })
  .then(data => console.log('success', data))
  .catch(err => console.log('error', err)); */
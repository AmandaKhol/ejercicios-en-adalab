"use strict";
//EJERCICIO 1
function getEmoji() {
  fetch("https://api.rand.fun/number/integer")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
}
document.querySelector(".js-emoji").addEventListener("click", getEmoji);

// EJERCICIO 2
function getDogImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un perro";
    });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);

// EJERCICIO 3

const user = document.querySelector(".user");
const login = document.querySelector(".login");
const photo = document.querySelector(".photo");
const repositories = document.querySelector(".repositories");
const search = document.querySelector(".search");

function handleSearch() {
  const username = user.value;
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      login.innerHTML = data.login;
      photo.src = data.avatar_url;
      photo.alt = username;
      repositories.innerHTML = data.public_repos;
    });
}

search.addEventListener("click", handleSearch);

"use strict";

//EJERCICIO 9
const teacherList = document.querySelector(".teachers");

function changeColor(event) {
  const clickedElement = event.target;
  const liElement = clickedElement.closest(".teacher");
  liElement.classList.toggle("teacher--selected");

  let favorite = liElement.querySelector(".favorite");

  if (favorite.innerHTML === "Añadir") {
    favorite.innerHTML = "Quitar";
  } else {
    favorite.innerHTML = "Añadir";
  }
}

teacherList.addEventListener("click", changeColor);

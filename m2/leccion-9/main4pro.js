"use strict";

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

const renderList = () => {
  let html = "";
  for (let index = 0; index < tasks.length; index++) {
    const oneTask = tasks[index];
    if (oneTask.completed) {
      html += `<li class="crossout">`;
    } else {
      html += `<li>`;
    }

    html += `<input class="js-complete" value="${index}" type="checkbox" ${
      oneTask.completed ? 'checked="checked"' : ""
    }/>`;
    html += oneTask.name;
    html += `</li >`;
  }

  listElement.innerHTML = html;

  // Asignar eventos

  listenInputs();
};
const listenInputs = () => {
  console.log("Asigno eventos a cada input-checkbox");

  const inputCheckList = document.querySelectorAll(".js-complete");

  for (const oneInput of inputCheckList) {
    oneInput.addEventListener("click", handleClick);
  }
};

const handleClick = (event) => {
  console.log("Atiendo un click en un checkbox");

  const indexList = parseInt(event.currentTarget.value);

  console.log(
    `Has hecho click sobre el input asociado al dato de la posición ${indexList}`
  );

  // Establezco la tarea como no-completada (si completed === true)
  // o la marco como completada (si completed === false --> el else)
  /*   
  if (tasks[indexList].completed) {
    tasks[indexList].completed = false;
  }
  else {
    tasks[indexList].completed = true;
  }
  */
  tasks[indexList].completed = !tasks[indexList].completed;

  // Ahora que he actualizado la lista de datos, vuelvo a escribirlos en el HTML:

  renderList();
};

renderList();

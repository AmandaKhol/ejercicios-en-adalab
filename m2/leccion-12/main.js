'use strict';

//EJERCICIO 1

const numbers = [1, 2, 3];
const listElement = document.querySelector('.js-list');


for (const number of numbers) {
  const newItem = document.createElement('li');
  const newContent = document.createTextNode(number);

  newItem.appendChild(newContent);
  listElement.appendChild(newItem);
}

//EJERCICIO 2
const searchBtn = document.querySelector('.search');
const selectElement = document.querySelector('#city');
const imageElement = document.querySelector('.js-image');

function handleSearchBtn() {
  const citySelectedValue = selectElement.value;  
  if (citySelectedValue === "madrid") {
    imageElement.src = "/images/madrid.jpeg";
  } else if (citySelectedValue === "paris") {
    imageElement.src = "/images/paris.jpg";
  } else {
    imageElement.src = "/images/newyork.jpg"; 
  }

}

selectElement.addEventListener("change", handleSearchBtn);
/* searchBtn.addEventListener("click", handleSearchBtn); */

//EJERCICIO 3

const usersArray = [
  {
    name: "Ana",
    surname: "Vázquez",
    tel: "916852233"
  },
  {
    name: "Lola",
    surname: "Blanco",
    tel: "91555455"
  },
  {
    name: "Isabel",
    surname: "Millán",
    tel: "946811133"
  }
]

const selectName = document.querySelector('#select-name');
const formEje3 = document.querySelector('.form-ejer3');
const inputName = document.querySelector('#name-input');
const inputSurname = document.querySelector('#surname-input');
const inputTel = document.querySelector('#tel-input');

function handleSelect() {
  const indexResult = selectName.value;

  /* const nameSelectedValue = selectName.value; */
/*   let indexResult = usersArray.findIndex(user => user.name === nameSelectedValue); */
/*   if (indexResult === -1){
    indexResult = usersArray.length;
  } */
  completeInputs(indexResult);
  }

// metodo alternativo con bucles
/* function handleSelect() {
  let indexUser = usersArray.length;
  const nameSelectedValue = selectName.value;
  for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i].name === nameSelectedValue) {
      indexUser = i;
    }
    completeInputs(indexUser);
  } */

function completeInputs(indexArray) {
  if (indexArray === "none" ) {
    inputName.value = "";
    inputSurname.value = "";
    inputTel.value = "";
    return;
  }
  indexArray = parseInt(indexArray);
  inputName.value= usersArray[indexArray].name;
  inputSurname.value = usersArray[indexArray].surname;
  inputTel.value = usersArray[indexArray].tel;
 /*  sendFormValues(usersArray[indexArray]); */

}


/* function sendFormValues(usersArray) {
  console.log(JSON.stringify(usersArray));

  fetch(url, {
    method: 'post',
    body: JSON.stringify(usersArray),
})
.then(response => console.log(response) );

  
} */
selectName.addEventListener("change", handleSelect);
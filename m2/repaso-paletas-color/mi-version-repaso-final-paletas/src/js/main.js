'use strict';

const palettesContainer = document.querySelector('.js-palettes-container')
const filterInput = document.querySelector('.js-filter');
const formElement = document.querySelector('.js-form');
const palettesElement = document.querySelectorAll('.js-palette')
let palettes = [];
let favorites = [];

// api
function getDataFromApi() {
    fetch('https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json')
        .then(response => response.json())
        .then(data => {
            palettes = data.palettes;
            paintPalettes();
            setInLocalStorage();
        });
}

function setInLocalStorage() {
    const stringPalettes = JSON.stringify(palettes);
    localStorage.setItem('palettes', stringPalettes);
}

function getFromLocalStorage() {
    const localStoragePalettes = localStorage.getItem('palettes');
    if (localStoragePalettes === null) {
        getDataFromApi();
    } else {
        palettes = JSON.parse(localStoragePalettes);
        paintPalettes();
    }
}

// filter
function handleFilter(ev) {
    paintPalettes();
}


function handleForm(ev) {
    ev.preventDefault();
}


filterInput.addEventListener('keyup', handleFilter);
formElement.addEventListener('submit', handleForm);

//render function
function paintPalettes() {
    let htmlCode = '';
    for (const palette of palettes) {
        let isValidClass;
        if (isValidPalette(palette)) {
            isValidClass = '';
        } else {
            isValidClass = 'palette--hidden';
        }
        let isFavoriteClass;
        if (isFavoritePalette(palette)) {
            isFavoriteClass = 'palette--favorite';
        } else {
            isFavoriteClass = '';
        }
        /*         if (isValidPalette(palette)) {
                    htmlCode += `<li class="palette js-palette" id="${palette.id}">`;
                } else { htmlCode += `<li class="palette palette--hidden js-palette" id="${palette.id}>`; } */
        htmlCode += `<li class="palette js-palette ${isValidClass} ${isFavoriteClass}" id="${palette.id}">`;
        htmlCode += `<h2 class="palette__title">${palette.name}</h2>`;
        htmlCode += `<div class="palette__colors">`;
        for (const paletteColor of palette.colors) {
            htmlCode += `<div class="palette__color" style="background-color: #${paletteColor}"></div>`;
        }
        htmlCode += '</div>';
        htmlCode += '</li>';
    }
    palettesContainer.innerHTML = htmlCode;
    //tiene que estar aquí porque es aquí cuando ya se ha creado
    listenPaletteEvents();
}


function isValidPalette(palette) {
    return palette.name.toLowerCase().includes(filterInput.value.toLowerCase());
}

function isFavoritePalette(palette) {
    const favoriteFound = favorites.find((favorite) => {
        return favorite.id === palette.id
    });
    if (favoriteFound === undefined) {
        return false;
    } else {
        return true;
    }
}

// listen palette events

function listenPaletteEvents() {
    const paletteElements = document.querySelectorAll('.js-palette');
    for (const paletteElement of paletteElements) {
        paletteElement.addEventListener("click", handlePalette);
    }

}

function handlePalette(ev) {

    const clickedPaletteId = ev.currentTarget.id;
    const favoritesFoundIndex = favorites.findIndex(function (favorite) {
        return favorite.id === clickedPaletteId;
    });

    if (favoritesFoundIndex === -1) {
        //push: necesito la paleta. Añado favorito a la lista
        const paletteFound = palettes.find(function (palette) {
            return palette.id === clickedPaletteId;
        });
        favorites.push(paletteFound);
    } else {
        favorites.splice(favoritesFoundIndex, 1);
    }


    paintPalettes();

}

// start app
getFromLocalStorage();


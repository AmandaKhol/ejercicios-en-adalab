'use strict';

//EJERCICIO 1

const marks = [5, 4, 6, 7, 9];

const inflatedMarks = marks.map(mark => mark + 1);
console.log("Notas anteriores: "+ marks);
console.log("Notas infladas: " + inflatedMarks);

//EJERCICIO 2

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const salutation = names.map(name => `Bienvenida ${name}`);
console.log(salutation);

//EJERCICIO 3

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false }
];


const salutationPremium = users.map(user => user.isPremium ? `Bienvenida ${user.name}. Gracias por confiar en nosotros` : `Bienvenida ${user.name}`);
console.log(salutationPremium);

//EJERCICIO 4

const premiumUsers = users.filter(user => user.isPremium === true);

console.log(premiumUsers);

//EJERCICIO 5
const pins = [2389, 2384, 2837, 5232, 8998];

const evenPins = pins.filter(pin => pin % 2 === 0);
console.log(evenPins);

//EJERCICIO 6
const usersEje6 = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];

const evenUsers = usersEje6.filter(user => user.pin % 2 === 0);
console.log(evenUsers);

//EJERCICIO 7
const times = [56, 9, 45, 28, 35];

const sum = times.reduce((acc, time) => (acc + time));
const average = sum / times.length;
console.log(average);

//EJERCICIO 8
const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 }
];

/* const winner = runners.reduce((runner, value) => runner.time > value ? value = runner.time, 0);

console.log(winner); */

//EJERCICIO 9


//EJERCICIO 10
const usersEje10 = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];

const failurePIN = 5232;

const failureUser = usersEje10.find(user => user.pin === 5232);
console.log(failureUser);

//apartado b

const failureUserPosition = usersEje10.findIndex(user => user.pin === 5232);
console.log(failureUserPosition);
const deletedUser = usersEje10.splice(failureUserPosition, 1);
console.log("nueva lista " + JSON.stringify(usersEje10)); 
console.log("elemento eliminado " + JSON.stringify(deletedUser));


//EJERCICIO 11
const runnersEje11 = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 }
];

const runnersClasification = runnersEje11.sort((a, b) => a.time - b.time);

console.log(runnersClasification);

//EJERCICIO 12

const usersEje12 = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];
//NO ME FUNCIONA
const alphabetical = usersEje12.sort((a, b) => a.name - b.name);

console.log(alphabetical);

const pinOrder = usersEje12.sort((a, b) => a.pin - b.pin);

console.log(pinOrder);
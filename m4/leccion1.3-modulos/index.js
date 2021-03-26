const mathE1 = require('./mathE1');
const math = require('./math');
const _ = require('lodash');

console.log('suma: ' + mathE1.add(3, 2));
console.log('resta: ' + mathE1.sub(3, 2));
console.log(math);
console.log(mathE1);
console.log('suma-op2: ' + math.add(3, 2));
console.log('resta-op2: ' + math.sub(3, 2));

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
const union = _.union(array1, array2);

console.log('Resultado de usar Lodash con union: ' + union);

const students = [
  {
    name: 'Sofía',
    promo: 'k',
  },
  {
    name: 'María',
    promo: 'l',
  },
  {
    name: 'Lucía',
    promo: 'j',
  },
  {
    name: 'Julia',
    promo: 'l',
  },
];

const promoLetterOrder = _.orderBy(students, 'promo', 'asc');
console.log('Orden por promo: ');
console.log(promoLetterOrder);

const nameAdalaberOrder = _.orderBy(students, 'name', 'asc');
console.log('Orden por nombre: ');
console.log(nameAdalaberOrder);

const togetherOrder = _.orderBy(students, ['promo', 'name'], ['asc', 'asc']);

console.log('Orden por todo: ');
console.log(togetherOrder);

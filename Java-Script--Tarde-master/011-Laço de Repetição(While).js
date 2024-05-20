//while
let i = 0
while (i <= 5) {
    console.log(i)
    i++;
}

const frutas = ['maça', 'banana', 'laranja', 'pera', 'melancia'];
let j = 0
while (j < frutas.length) {
    console.log('Eu gosto de ' + frutas[j]);
    j++;
}

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

let key = 0
for (key in person) {
    console.log(key + ': ' + person[key]);
}

let k = 0;
while (k < 10) {
    if (k === 5) {
        break;
    }
    console.log(k);
    k++;
}
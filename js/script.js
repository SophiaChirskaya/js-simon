// Elementi del DOM

const form = document.getElementById('answers-form');
const inputNumber = document.querySelectorAll ('#input-group input');
const button = document.querySelector('button');
const countdown = document.getElementById('countdown');
const instructions = document.getElementById('instructions');
const listNumber = document.getElementById('numbers-list');
const messaggio = document.getElementById('message');


// Genero gli elementi della lista
// genero i numeri randomici
const number = generateRandomNumbers(5, 1, 50);
console.log('I numeri da memorizzare',number);

// Variabile di accumulo
let items = '';

for (let i = 0; i < 5; i++) {
    items +=`<li>${number[i]}$<li>`
}

listNumber.innerHTML = items;

// Countdown

// FUNCTIONS
// per generare i numeri randomici

function randomNumberRange(min, max){
    return Math.floor(Math.random() + (max - min + 1) + min);
}

// per generare numeri casuali unici
function generateRandomNumbers(totalNumbers, min, max){
    // creo un array vuoto
    const randomNumbers = [];
    // ciclo per creare 'N' numeri casuali uunici
    for (let i = 0; randomNumbers.length < totalNumbers; index++) {
        const enumerIesimo = randomNumberRange(min, max);
        
    }
}
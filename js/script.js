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
let seconds = 10;

// Stampo lo scorrimento secondi
countDown.innerHTML = seconds;

const contoAllaRovescia = setInterval(() => {
    if (seconds = 0) {
        clearInterval(contoAllaRovescia);
        // modifico le istruzioni utente
        instructions.innerHTML = "Inserisci i numeri";
        // elimino il numero una volta che i countdown arriva a 0
        countDown.innerHTML = '';
        // nascondo lista numeri
        listNumber.classList.add ('d-none');
        // mostro il form per l'input utente
        form.classList.remove('d-none');
    }else{
        // diminuisco il conto di 1
        seconds = seconds - 1;
        // mostro l'output di countdown
        countDown.innerHTML = seconds;
    }
}, 1000);
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
// Elementi del DOM

const form = document.getElementById('answers-form');
const inputNumber = document.querySelectorAll ('#input-group input');
const button = document.querySelector('button');
const countdown = document.getElementById('countdown');
const instructions = document.getElementById('instructions');
const listNumber = document.getElementById('numbers-list');
const messaggio = document.getElementById('message');


// creo contdowm
let countdown = 5;
// funzione per aggiornare il countdown
const updateCountdown = () => {
    console.log(countdown);
    if (countdown === 0) {
        console.log("Tempo scaduto!");
        clearInterval(intervalId);
    } else {
        countdown--;

    }
    
}

const intervalId = setInterval(updateCountdown, 1000);
countdown.innerHTML = countdown;



// genero i numeri randomici
function generaNumeriCasuali() {
    const numeriCasuali = new Set();

    while (numeriCasuali.size < 5) {
        const numero = Math.floor(Math.random() * 50) + 1;
        numeriCasuali.add(numero);
    }

    return Array.from(numeriCasuali);
}

console.log(generaNumeriCasuali());

// confronto i numeri inseriti con i numeri visualizzati
function name(params) {
    
}

// assegno le variabili di input
const inputUser = document.querySelectorAll(".form-control")
console.log(inputUser);

// per evitare che dati inseriti vengono spediti
const form = document.querySelector("form");
form.addEventListener("btn btn-primary mt-2 d-block mx-auto", (Event)); {
    Event.preventDefault();
}
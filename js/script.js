// Elementi del DOM

const form = document.getElementById('answers-form');
const inputNumber = document.querySelectorAll ('#input-group input');
const button = document.querySelector('button');
const countDown = document.getElementById('countdown');
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

// Gestisco il form
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // creo un array vuoto per raccogliere numeri utente
    const numeriscelti = []

    // salvo la variabile N doppio inizialmente falsa
    let duplicato = false
    
    // creo il ciclo per ricavare i valori input
    for (let i = 0; i < inputNumber.length; i++) {
        const numberValue = parseInt(inputNumber[i].value.trim());

        // controllo se il N è già presente nel array
        if(numeriscelti.includes(numberValue)){
            
            // modifica il valore duplicato in vero
            duplicato = true;
            break;  
        }
        // lo inserisco nell'array numeriscelti
        numeriscelti.push(numberValue)
    }
    console.log("Numeri utente", numeriscelti);

    if(duplicato){
        messaggio.innerHTML = "I numeri non vanno ripetuti!"
        
    }else{
        const numeriIndovinati = validateNumbers(numeriscelti, number);
        const numeriIndovinatimex = `Hai indovinato ${numeriIndovinati.length} numeri: ${numeriIndovinati.join(' - ')}`

        // DEBUG
        console.log("Hai indovinato", numeriIndovinati);

        // tutti i N sono stati indovinati se entrambi gli array sono vuoti

        if(numeriIndovinati > 0){

            messaggio.innerHTML = `${numeriIndovinatimex}`;
            
        }else{
            messaggio.innerHTML = "Non hai indovinato nessun numero";
        }

        button.disabled = true;
        form.requestFullscreen();
   }


} )

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
    for (let i = 0; randomNumbers.length < totalNumbers; i++) {
        const numerIesimo = randomNumberRange(min, max);

        // verifico se il numero è già presente nell'array
        if(!randomNumbers.includes(numerIesimo)){
            // se non è presente lo aggiungo all'array
            randomNumbers.push(numerIesimo);
        }
        
    }
    return randomNumbers;
}

// Function per validare l'array utente rispetto a quello generato
function validateNumbers (arraycheck, arrayverify){
    const result = [];

    for (let i = 0; i < arraycheck.length; i++) {
        const item = arraycheck[i];

        if (arrayverify.includes(item)){
            result.push(item);
        }
        
    }
    return result;
}

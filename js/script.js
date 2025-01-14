// assegno le variabili di input
const inputUser = document.querySelectorAll(".form-control")
console.log(inputUser);

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

// genero i numeri randomici
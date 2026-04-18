// // Snack 1 
// // Crea una funzione che somma due numeri.
// // Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

// function somma(a, b) {
//     return a + b;
// }

// console.log("Funzione dichiarativa: La somma dei due numeri è:", somma(10, 15)); // Output: 25

// // Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

// const sommaNoName = function (a, b) {
//     return a + b;
// }

// console.log("Funzione anonima: La somma dei due numeri è:", sommaNoName(5, 5)); // Output: 10

// // Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

// const sommaArrow = (a, b) => a + b;

// console.log("Arrow function: La somma dei due numeri è:", sommaArrow(5, 10)); // Output: 15

// // Snack 2
// // Crea una arrow function che calcola il quadrato di un numero.
// // Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

// const quadrato = n => n * n;

// console.log("Il quadrato di n è:", quadrato(8)); // Output: 64

// // Snack 3
// // Crea una funzione eseguiOperazione.
// // Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

// function somma(a, b) {
//     return a + b;
// }

// function moltiplicazione(a, b) {
//     return a * b;
// }

// function eseguiOperazione(n1, n2, operatore) {
//     return operatore(n1, n2);
// }

// console.log("Eseguo somma", (eseguiOperazione(6, 6, somma)));
// console.log("Eseguo moltiplicazione", (eseguiOperazione(6, 6, moltiplicazione)));

// // Snack 4
// // Crea un generatore di funzioni creaTimer.
// // Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

// function creaTimer(tempo) {
//     return function () {
//         setTimeout(() => {
//             console.log("Tempo scaduto!");
//         }, tempo);
//     }
// }

// const timer = creaTimer(2000)

// console.log("Avvio timer...");
// timer();

// // Snack 5
// // Crea una funzione stampaOgniSecondo con setInterval.
// // Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// function stampaOgniSecondo(msg) {
//     return setInterval(() => {
//         console.log(msg);
//     }, 1000);
// }
// stampaOgniSecondo("Ciao ogni secondo!");

// // Snack 6
// // Crea un contatore automatico con setInterval.
// // Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

// function creaContatoreAutomatico(intervallo) {

//     let contatore = 0;
//     return function () {
//         setInterval(() => {
//             contatore++;
//             console.log("Contatore:", contatore);
//         }, intervallo);
//     }
// }
// const contatore = creaContatoreAutomatico(1000);
// console.log("Avvio contatore automatico...");
// contatore();


// Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo.
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiFerma(msg, interval, duration) {
	
	const intervalId = setInterval(() => {
		console.log(msg);
	}, interval);

	setTimeout(() => {
		clearInterval(intervalId);
	}, duration);

}

eseguiFerma("Eseguo...", 1000, 4000);

// Snack 8 (Bonus)
// Crea una funzione che simula un conto alla rovescia.
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

// Snack 9 (Bonus)
// Creare una funzione che esegue una sequenza di operazioni con ritardi.
// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

// Snack 10 (Bonus)
// Creare un throttler per limitare l’esecuzione di una funzione.
// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
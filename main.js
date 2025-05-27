/* il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 il prezzo del biglietto è definito in base ai km(0.21 € al km)
 va applicato uno sconto del 20 % per i minorenni
 va applicato uno sconto del 40 % per gli over 65.
 L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 TIP: per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:
 100km, 10 anni => prezzo corretto: €16.80
 100km, 70 anni => prezzo corretto: €12.60

 Tools:

- Variabili: const, let
- Prompt
- Number/parseInt/parseFloat
- Operatori matematici: + - * / %
- Operatori di confronto: > = < == !==
- if/else
- console.log

*/


//# il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// creo le due variabili e le stampo a video
const kmUser = Number(prompt("Quanti chilometri devi percorrere?"));
console.log(kmUser);

const ageUser = parseInt(prompt("Quanti anni hai?"));
console.log(ageUser);


// # calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km(0.21 € al km)
// creo la variabile "prezzo per chilometro" per stabilire subito dopo il "prezzo pieno" attraverso l'utilizzo degli operatori matematici (*)
const priceperKm = 0.21

const fullPrice = priceperKm * kmUser;
console.log(fullPrice)

// # va applicato uno sconto del 20 % per i minorenni - va applicato uno sconto del 40 % per gli over 65.
// applico lo sconto in base all'età dei viaggiatori sfruttando i conditional statements e creo le variabili Young e Senior (if/else)

if (ageUser < 18) {
    const youngPrice = fullPrice - (fullPrice * 20 / 100);
    console.log(youngPrice.toFixed(2))

} else if (ageUser > 65) {
    const seniorPrice = fullPrice - (fullPrice * 40 / 100);
    console.log(seniorPrice.toFixed(2))

} else {
    console.log(fullPrice.toFixed(2))
}

// # L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// ho usato .toFixed(n) per stampare il prezzo scontato con 2 decimali







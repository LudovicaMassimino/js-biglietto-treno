console.log ('ciao');

// esercizio: calcolo del prezzo del biglietto del treno

// chiedere all'utente il numero di km che vuole percorrere
const km = prompt('Quanti km vuoi percorrere?'); // string | null
console.log (km + ' km')

// chiedere all'utente l'età
const age = prompt('Quanti anni hai?'); // string | null
console.log (age + ' anni')

// calcolare il prezzo totale del viaggio premettendo che: 

// il prezzo del biglietto è definito in base ai km (0.21 € al km);
const prezzoProvvisorio = (0.21 * km); //number
console.log ('Totale provvisorio ' + prezzoProvvisorio + ' euro')


// va applicato uno sconto del 20% per i minorenni: SE <18 allora avrà lo sconto del 20%


// if (age < 18) {
//     console.log ('Puoi usufruire dello sconto del 20%')
// } else {
//     console.log ('Non puoi usufruire dello sconto del 20%')
// }

// const sconto20 = (prezzoProvvisorio * 0.2); //number
// console.log (sconto20 + ' euro')
 
// const prezzoTotMin = (prezzoProvvisorio - sconto20); //number
// console.log ('Totale ' + prezzoTotMin + ' euro')

// // va applicato uno sconto del 40% per gli over 65: SE >65 allora avrà lo sconto del 40%

// if (age > 65) {
//     console.log ('Puoi usufruire dello sconto del 40%')
// } else {
//     console.log ('Non puoi usufruire dello sconto del 40%')
// }

// const sconto40 = (prezzoProvvisorio * 0.4); //number
// console.log (sconto40 + ' euro')
 
// const prezzoTotOver = (prezzoProvvisorio - sconto40); //number
// console.log ('Totale ' + prezzoTotOver + ' euro')

// mettendo le condizioni in un unico costrutto:
if (age < 18) {
    console.log ('Puoi usufruire dello sconto del 20% :')

    const sconto20 = (prezzoProvvisorio * 0.2); //number
    console.log (sconto20 + ' euro')
 
    const prezzoTotMin = (prezzoProvvisorio - sconto20); //number
    console.log ('      Totale ' + prezzoTotMin + ' euro')

} else if (age > 65) {
    console.log ('Puoi usufruire dello sconto del 40%')

    const sconto40 = (prezzoProvvisorio * 0.4); //number
    console.log (sconto40 + ' euro')
 
    const prezzoTotOver = (prezzoProvvisorio - sconto40); //number
    console.log ('      Totale ' + prezzoTotOver + ' euro')

} else {
    console.log ('Non puoi usufruire dello sconto')
}
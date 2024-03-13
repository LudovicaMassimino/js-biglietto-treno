console.log ('ciao');
console.log ('Calcoliamo il prezzo di un biglietto del treno:');

// esercizio: calcolo del prezzo del biglietto del treno

// chiedere all'utente il numero di km che vuole percorrere
const km = parseInt(prompt('Quanti km vuoi percorrere?')); // number
console.log (km + ' km')

// chiedere all'utente l'età
const age = parseInt(prompt('Quanti anni hai?')); // number
console.log (age + ' anni')

// calcolare il prezzo totale del viaggio premettendo che: 

// - il prezzo del biglietto è definito in base ai km (0.21 € al km);
const prezzoProvvisorio = 0.21 * km ; //number
console.log ('Totale provvisorio ' + prezzoProvvisorio + ' euro')


// - va applicato uno sconto del 20% per i minorenni: SE <18 allora avrà lo sconto del 20%


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
    console.log ('Sconto: ' + sconto20.toFixed(2) + ' euro')
 
    const price = (prezzoProvvisorio - sconto20); //number
    console.log ('      Totale ' + price.toFixed(2) + ' euro')

    const priceElement = document.getElementById ('price') // string | null
    console.log(priceElement)
    priceElement.innerHTML = 'Prezzo del biglietto: ' + price.toFixed(2) + ' &euro;'


} else if (age > 65) {
    console.log ('Puoi usufruire dello sconto del 40%')

    const sconto40 = (prezzoProvvisorio * 0.4); //number
    console.log ('Sconto: ' + sconto40.toFixed(2) + ' euro')
 
    const price = (prezzoProvvisorio - sconto40); //number
    console.log ('      Totale ' + price.toFixed(2) + ' euro')

    const priceElement = document.getElementById ('price') // string | null
    console.log(priceElement)
    priceElement.innerHTML = 'Prezzo del biglietto: ' + price.toFixed(2) + ' &euro;'


} else {
    console.log ('Non puoi usufruire dello sconto')
}

// ottimizzato
// let sconto = 0 // number
// if (age < 18) {
//     sconto = 0.2
// } else if (age > 65) {
//     sconto = 0.4
// }

// const price = prezzoProvvisorio - prezzoProvvisorio * sconto
// console.log (price.toFixed(2))




// // bonus: stampare prezzo nella pagina html
// const priceElement = document.getElementById ('PrezzoTotale') // string | null
// console.log(priceElement)
// priceElement.innerHTML = 'Prezzo del biglietto: '
// + priceElement.toFixed(2) + '&euro;'





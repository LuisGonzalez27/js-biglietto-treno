"use strict";

let numeroKm = parseInt(prompt('Quanti chilometri vuoi percorre ?')) ;
let etaPasseggero = parseInt(prompt('Inserisca la sua età :')) ;

console.log(numeroKm);
console.log(etaPasseggero);

const prezzoBiglietto = numeroKm * 0.21 ;
console.log(prezzoBiglietto + ' EUR, prezzo senza sconto.');

if(etaPasseggero < 18){
    let sconto = ( prezzoBiglietto / 100) * 20;
    console.log('Sconto minorenne è di : ' + sconto);
    let prezzoFinale = prezzoBiglietto - sconto ;
    console.log('Il prezzo con lo sconto minorenne è di : ' + prezzoFinale);

    var centesimi = prezzoFinale;
    centesimi = centesimi.toFixed(2);
    console.log('Il prezzo con i decimali : ' + centesimi);

    const prezzoStampato = document.getElementById('mioPrezzo');
    prezzoStampato.innerHTML = centesimi;
    
} else if(etaPasseggero > 65){
    let scontoOver = ( prezzoBiglietto / 100) * 40;
    console.log('Sconto over 65 è di : ' + scontoOver);
    let prezzoFinaleOver = prezzoBiglietto - scontoOver ;
    console.log('Il prezzo con lo sconto over 65 è di : ' + prezzoFinaleOver);

    var centesimi = prezzoFinaleOver;
    centesimi = centesimi.toFixed(2);
    console.log('Il prezzo con i decimali : ' + centesimi);

    const prezzoStampato = document.getElementById('mioPrezzo');
    prezzoStampato.innerHTML = centesimi;
} 

if( etaPasseggero > 18 && etaPasseggero < 65){

    var centesimi = prezzoBiglietto;
    centesimi = centesimi.toFixed(2);
    console.log('Il prezzo senza sconto età è di : ' + centesimi);

    const prezzoStampato = document.getElementById('mioPrezzo');
    prezzoStampato.innerHTML = centesimi;
}
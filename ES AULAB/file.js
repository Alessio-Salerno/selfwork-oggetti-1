/*  ESERCIZIO AULAB
Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
Primo step: eliminare gli spazi e i segni di punteggiatura:
Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")

Esempio:
Input: “i topi non avevano nipoti”
Output: true    javascript semplice
*/ 


// Inserire funzione

// function primaStringa(stringa){
//     // Rimuovere gli spazi unsando un metodo .replace
//     stringa = stringa.replace(/\W/g, "");
    
//     // Per dividere ogni singolo carattere usare il metodo .split
//     // Crearsi una variabile come contenitore
//     let reverse = stringa.split('').reverse().join('');
   

//     if(stringa ==  reverse){
//        return true;
//     }
//     else{
//         return false;
//     }

// }

// console.log(primaStringa('i topi non avevano nipoti'));

// ---------------- \\

// SELFWORK ARRAY 1

// let number = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];
// // ORDINE CRESCENTE a-b (DECRESCENTE= b - a)   
// let sorted = number.sort( ( a, b ) => b - a );
// console.log(number);

// // ----------- \\


// // OPPURE

// let numero = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

// numero.sort(  (c, d ) => c -d );
// console.log(numero);



// SELFWORK ARRAY 2


// Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:  

// Esempio:
//Input: a = [3, 5, 10, 2, 8]
//Output: media = 5.6, valori minori = [3, 5, 2]

// Variante:
//Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.


// let array = [3, 5, 10, 2, 8];

// let somma = array.reduce( (acc, val) => acc + val );
// console.log(`La somma dei numeri è ${somma}`);

// let media = somma / array.length;
// console.log(`la media dei numeri è ${media}`);


// let filter = array.filter(el => el < 8);
// console.log(`Valori minori di 8 = [${filter.join(',')}]`);

// // VALORI MAGGIORI DI 3,5,2

// let valoriMaggiori = array.filter(elemento => elemento > 5);
// console.log(`I valori maggiori di 5 = [${valoriMaggiori.join(',')}]`);

// // STAMPA I VALORI MINORI E MAGGIORI DELLA MEDIA

// let filter2 = array.filter(el => el <= media);
// console.log(`Valori minori della media = [${filter2.join(',')}]`);

// let valoriMaggiori2 = array.filter( elemento1 => elemento1 > media );
// console.log(`I valori maggiori della media = [${valoriMaggiori2.join(',')}]`);



//  ----------------------------------------------------- \\


// SELFWORK OGGETTI 1

/*
Crea un oggetto persona con le seguenti caratteristiche:
-nome
-cognome
-eta'
-un metodo che permetta di salutare;
*/


let oggetto = {

   nome: 'Alessio',
   cognome: 'Salerno',
   età: 24,
   luogo: 'Palermo',

   getSaluta: function(){
    console.log(`Un saluto da ${this.nome} ${this.cognome}, ho ${this.età} anni e vengo da ${this.luogo}`);
   }
   
}

console.log(oggetto);
oggetto.getSaluta();


















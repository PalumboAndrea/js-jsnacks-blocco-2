/**

Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array.

*/


let array = []

const number = parseInt(prompt('inserisci un numero'));

if (number % 2 === 0){
    console.log('pari')
} else {
    array.push(number);
}

console.log(array[0]);



    






















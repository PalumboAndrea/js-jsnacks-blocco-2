

/**

Calcola la somma dei primi 10 numeri di un array.

Calcola la somma e la media dei primi 10 numeri di un array.

Calcola la somma, la media e il valore massimo dei primi 10 numeri di un array.

*/

const lista = [1, 2, 3, 6, 60, 8, 15, 20, 25, 40, 50];

let sum = 0;

let media = 10

let maggiore

for (i=0; i<media; i++) {
  sum += lista[i];
  

  if (lista[i+1] > lista[i]){
    maggiore = lista[i+1];
  }

}

console.log(sum);

console.log(sum / media);

console.log(maggiore);





    






















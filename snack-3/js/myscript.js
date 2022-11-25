

/**

Calcola la somma dei primi 10 numeri di un array.

Calcola la somma e la media dei primi 10 numeri di un array.

Calcola la somma, la media e il valore massimo dei primi 10 numeri di un array.

*/

const lista = [1, 99, 3, 120, 60, 70, 15, 20, 95, 40, 80];

let sum = 0;

let media = 10

let maggiore = 0;

for (i=0; i<media; i++) {
  sum += lista[i];
  

  if (maggiore < lista[i] ){
    maggiore = lista[i];
  }

}

console.log(sum);

console.log(sum / media);

console.log(maggiore);





    






















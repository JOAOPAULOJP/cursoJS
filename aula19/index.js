// Valores primitivos: valores imutaveis (string, number, boolean, undefined,  null, bigInt, symbol)

let valorA = "A";
let valorB = valorA;
valorA = "C"

// Nesse caso O valorB não vai ser alterado pq foi criado uma copia
console.log(valorA, valorB)


// Valores por referência: é mutavel ( Array, objetos, function)


const lista1 = ['a','b','c'];

const lista2 = lista1; 

const lista3 = 'junior'

lista2 = [...lista3]

console.log(lista1, lista2)
// Atribuição via desestruturação(Arraus)


// ... operador rest, ... spread
const numeros = [100,200,300,400,500,600];
const [um, dois, , ...resto] = numeros
console.log(um, dois)
console.log(resto)



// lista dentro de uma lista
const numero = [ [1,2,3], [4,5,6], [7,8,9] ]

console.log(numero[1][2])
const [listaZero, listaUm, ListaDois] = numero;
console.log(ListaDois[0])
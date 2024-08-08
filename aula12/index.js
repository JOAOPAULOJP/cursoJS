/*
    Objetivo do exercio:

    let varA = 'A'; "B" variavel A vai ter o resultado da variavel B
    let varB = 'B'; "C" variavel b vai ter o resultado da variavel C
    let varC = 'C'; "A" variavel c vai ter o resultado da variavel A
*/

 varA = 'A';
 varB = 'B';
 varC = 'C';

const guardaA = varA;

varA = varB;
varB = varC;
varC = guardaA;

console.log(varA,varB,varC)



// const guardaB = varC;
// varB = guardaB

// const guardaC = varA
// varC = guardaC

// console.log(varA) 
// console.log(varB)
// console.log(varC)


// varA= varB;








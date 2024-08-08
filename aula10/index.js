/* operadores artimeticos   

    + Adição / concatenação
    - Subtração
    / Divisão
    ** Pontenciação
    % Resto da divisão

    Prrecendencia:
        1- ()   
        2- **
        3- * / %
        4- + -
*/

const num1 = 5;
const num2 = 2;
const num3 = 10
//console.log(num1 ** num2);

//console.log( (num1 + num2) * num3);

// ------------------------------------------------------------------------------



// operadores de atrbuição
// ++  incremento
// -- decremento
// pre-decremtento e pos-decremento
let contador = 1;
contador++;
contador++;
//console.log(++contador)

// boa prática fazer primeiro o incremento e depois exibir resultado
// contador sempre incrementa e 1 em 1. para mudar isso, segue código abaixo

const passo = 2;
let cont = 0;

cont += passo;
cont += passo;
cont += passo;
console.log(cont)


// -------------------------------------------------------------------------------

/* 
    NaN not a number
    convertendo o dados de string para numero inteiro o pontoFlutuante
    Função ' Number() '
*/

const numero1 = 5;
const numero2 = Number('15');

console.log(numero1+ numero2);

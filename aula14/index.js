// let num1 = 2; 
// let num2 = 2.5;

//console.log(num1.toString() + num2);
// ele transformar na hora do calculo o numero pra string, mas a variavel não é alterado seu tipo
//console.log(typeof(num1))

// para alterar realmente o tipo de num1 para string

//num1 = num1.toString();
//console.log(typeof(num1))


//console.log(Number.isInteger(num1));


// let temp = num1 * "5";
// console.log(Number.isNaN(temp))
// console.log(temp)



// IMPRECISÃO, usando parsetFloat ou Number  para resolver
//Padrão  IEEE 754-2008


let num1 = 0.7; 
let num2 = 0.1;

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0
num1 += num2; //1.1
num1 += num2; //1.2
num1 += num2; //1.3
num1 += num2; //1.4
num1 += num2; //1.5

console.log(parseFloat(num1.toFixed(2)) )
console.log(Number.isInteger(num1))
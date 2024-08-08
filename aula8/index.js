/*
Luiz Otávio Mirando tem 30 anos , pesa 84kg
tem 1.8 de altura e seu IMC é de 25.9259231232
LUIZ OTAVIO nasceu em 1980
*/
const date = new Date();
const nome = 'João Paulo';
const sobreNome = 'Santana';
const idade = 36;
const peso = 87;
const altura = 1.9;
let imc = peso / (altura * altura);

let anoAtual = date.getFullYear();
console.log(anoAtual)
let meuNascimento =  anoAtual-idade;


 console.log( `${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg`);
 console.log( `tem ${altura} de altura e seu IMC é de  ${imc}. ${nome} nasceu em ${meuNascimento}`);

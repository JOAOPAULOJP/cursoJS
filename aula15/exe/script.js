

const  numero = Number(prompt("Digite um numero"));
const adicionarNumero = document.querySelector('#numero-titulo');
const texto = document.querySelector('#texto');

adicionarNumero.innerHTML = numero;

texto.innerHTML = 
    `<p>A raiz quadrada: ${numero ** 0.5}</p>
    <p>Seu ${numero} é inteiro? ${Number.isInteger(numero)}</p> 
    <p>Seu numero é NaN: é ${Number.isNaN(numero)}</p>
    <p>Arrendondando para baixo: ${Math.floor(numero)}
    <p>Arrendondando para cima: ${Math.ceil(numero)}
    <p>Com duas casas decimais: ${ numero.toFixed(2) }`

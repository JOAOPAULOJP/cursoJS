
/*
> maior que
>= maior que ou igual a
< menor que
< menor que ou igual a
 && -> and -> todas as expressoes precisam ser verdadeira pra retornar true
 || -> OR  -> Ser uma for verdadeira retorna true
*/
const elementos = [
    {tag:'p',texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
]


 const container = document.querySelector('.container');
 const newDiv = document.createElement("div");


for (let i = 0; i < elementos.length; i++) {

    criarTag = elementos[i].tag;
    criarTexto = elementos[i].texto;
     
    const newTag = document.createElement(criarTag); // Criando as tags
    const conteudo = criarTexto;   // pegandos os conteúdo de texto
    newTag.innerText = conteudo; // Atribuindo os conteúdo de texto aos elementos

    newDiv.append(newTag)
    container.appendChild(newDiv)

}













// function gerarImc(){
//    const form = document.querySelector('.form');
//    const resultado = document.querySelector('.resultado')

//    function calcularImc(e){
//         e.preventDefault()
//         const peso = Number(form.querySelector('.peso').value);
//         const altura = Number(form.querySelector('.altura').value);
       
//         const imc = peso / (altura * altura);

//         if(imc < 18.5){
//             resultado.innerHTML =`<p class='green'>Seu IMC é ${imc.toFixed(2)}, você está abaixo do peso</p>`;
//         }else if(imc >= 18 && imc <= 24.9){
//             resultado.innerHTML =`<p class='green'>Seu IMC é ${imc.toFixed(2)}, você está peso normal<p>`;
//         }else if(imc >= 25 && imc <= 29.9 ){
//             resultado.innerHTML =`<p class='yellow'>Seu IMC é ${imc.toFixed(2)}, você está com sobrepeso</p>`;
//         }else if(imc >=30 && imc <= 34.9){
//             resultado.innerHTML =`<p class='red'>Seu IMC é ${imc.toFixed(2)}, você está com obesidade grau 1</p>`;
//         }else if(imc >=35 && imc <= 39.9){
//             resultado.innerHTML =`<p class='red'>Seu IMC é ${imc.toFixed(2)}, você está com obesidade grau 2</p>`;
//         }else if(imc > 40){
//             resultado.innerHTML =`<p class="red">Seu IMC é ${imc.toFixed(2)}, você está com obesidade grau 3</p>`;
//         }
//    }

//    form.addEventListener('submit', calcularImc)
// }

// gerarImc();




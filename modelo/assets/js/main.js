
/*
> maior que
>= maior que ou igual a
< menor que
< menor que ou igual a
 && -> and -> todas as expressoes precisam ser verdadeira pra retornar true
 || -> OR  -> Ser uma for verdadeira retorna true
*/
function gerarImc(){
   const form = document.querySelector('.form');
   const resultado = document.querySelector('.resultado')

   function calcularImc(e){
        e.preventDefault()
        const peso = Number(form.querySelector('.peso').value);
        const altura = Number(form.querySelector('.altura').value);
       
        //Validações
        // if(isNaN(peso)){
        //     resultado.innerHTML = "esse campo só é numero";
        //     return;
        // }else if(isNaN(peso)){
        //     resultado.innerHTML ="esse campo só é numero";
        //     return;
        // }
        // if(peso !== "" && altura !== ""){
        //     resultado.innerHTML ="Os campos não podem ser vazio e não podem ter letras";
        //     return;
        // }
  
        const imc = peso / (altura * altura);

        if(imc < 18.5){
            resultado.innerHTML =`<p class='green'>Seu IMC é ${imc.toFixed(2)}, você está abaixo do peso</p>`;
        }else if(imc >= 18 && imc <= 24.9){
            resultado.innerHTML =`<p class='green'>Seu IMC é ${imc.toFixed(2)}, você está peso normal<p>`;
        }else if(imc >= 25 && imc <= 29.9 ){
            resultado.innerHTML =`<p class='yellow'>Seu IMC é ${imc.toFixed(2)}, você está com sobrepeso</p>`;
        }else if(imc >=30 && imc <= 34.9){
            resultado.innerHTML =`<p class='red'>Seu IMC é ${imc.toFixed(2)}, você está com obesidade grau 1</p>`;
        }else if(imc >=35 && imc <= 39.9){
            resultado.innerHTML =`<p class='red'>Seu IMC é ${imc.toFixed(2)}, você está com obesidade grau 2</p>`;
        }else if(imc > 40){
            resultado.innerHTML =`<p class="red">Seu IMC é ${imc.toFixed(2)}, você está com obesidade grau 3</p>`;
        }
   }

   form.addEventListener('submit', calcularImc)
}

gerarImc();


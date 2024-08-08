

const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const peso = Number(form.querySelector('.peso').value);
    const altura = Number(form.querySelector('.altura').value);

    if(!peso){ return resultado.innerHTML= "não valido" }
    if(!altura){ return resultado.innerHTML="não valido" }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc) 
    const resultado = setResultado(nivelImc, imc)
   
})



function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc
}

function getNivelImc(imc){
    const nivel= ['está abaixo do peso','está peso normal', 'está com sobrepeso', 'está com obesidade grau 1', 
                'está com obesidade grau 2', 'está com obesidade grau 3' ]

    if(imc < 18.5){ return nivel[0] }
    if(imc >= 18 && imc <= 24.9){ return nivel[1]}
    if(imc >= 25 && imc <= 29.9 ){ return nivel[2]}
    if(imc >=30 && imc <= 34.9){ return nivel[3]}
    if(imc >=35 && imc <= 39.9) { return nivel[4]}
    if(imc > 40) { return nivel[5] }

}

function setResultado(msg, imc){
   resultado.innerHTML = `Seu IMC é ${imc} vc ${msg}`
}









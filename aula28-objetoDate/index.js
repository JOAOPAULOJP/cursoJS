/*
    New date(ano, mês, dia, hora, minuto, segundo, milessimo de sgundo) - 
*/

//const data = new Date();
/*
console.log('dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('segunod', data.getSeconds());
console.log('milessimo', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0- domingo , 6- sábado*/

// console.log(data.toString())
//console.log(Date.now()); //marco zero até data atual em miliessimo de segundos

function zeroAesquerda(numero){
   return numero >= 10 ? numero : `0${numero}`;
}

function formatarData(data){
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth() + 1);
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());
    const se = zeroAesquerda(data.getSeconds());

    
    return console.log(`${dia}/${mes}/${ano} as ${hora}:${min}:${se}`)
}
const data = new Date();
const dataBrasil = formatarData(data);

function GetSemanas(diaSemana) {
    let diaDaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaDaSemanaTexto = "Domingo";
            return diaDaSemanaTexto;
        case 1:
            diaDaSemanaTexto = "Segunda-feira";
            return diaDaSemanaTexto;
        case 2:
            diaDaSemanaTexto = "Terça-feira";
            return diaDaSemanaTexto;
        case 3:
            diaDaSemanaTexto = "Quarta-feira";
            return diaDaSemanaTexto;
        case 4:
            diaDaSemanaTexto = "Quinta-feira";
            return diaDaSemanaTexto;
        case 5:
            diaDaSemanaTexto = "Sexta-feira";
            return diaDaSemanaTexto;
        case 6:
            diaDaSemanaTexto = "Sábado";
            return diaDaSemanaTexto;
        case 7:
            diaDaSemanaTexto = "";
            return diaDaSemanaTexto
    }
}

function GetNomeMes(mes) {
    let nomeMes;
    if (mes === 0) {
        nomeMes = "Janeiro";
        return nomeMes
    } else if (mes === 1) {
        nomeMes = "Fevereiro";
        return nomeMes
    } else if (mes === 2) {
        nomeMes = "Março";
        return nomeMes
    }else if (mes === 3) {
        nomeMes = "Abril";
        return nomeMes
    }else if (mes === 4) {
        nomeMes = "Maio";
        return nomeMes
    }else if (mes === 6) {
        nomeMes = "junho";
        return nomeMes
    }else if (mes === 7) {
        nomeMes = "Julho";
        return nomeMes
    }else if (mes === 8) {
        nomeMes = "Agosto";
        return nomeMes
    }else if (mes === 9) {
        nomeMes = "setembro";
        return nomeMes
    }else if (mes === 10) {
        nomeMes = "Outubro";
        return nomeMes
    }else if (mes === 11) {
        nomeMes = "novembro";
        return nomeMes
    }else{
        nomeMes="Dezembro"
    }

}

const h2 = document.querySelector(".data");

const dataAtual = new Date()

const diaSemana = dataAtual.getDay();
const data = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();
const hora = dataAtual.getHours();
const minutos = dataAtual.getMinutes();



const textoDiasemana = GetSemanas(diaSemana);
const textoNomeMes = GetNomeMes(mes);

h2.innerHTML=`${textoDiasemana}, ${data} de ${textoNomeMes} de ${ano} às ${hora}:${minutos} `;



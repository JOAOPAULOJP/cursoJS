function getDiaDaSemana(diaSemana){
    let Diasemanatexto
    switch (diaSemana) {
        case 0:
            Diasemanatexto = 'Domingo';
            return Diasemanatexto;
        case 1:
            Diasemanatexto = 'Segunda';
            return Diasemanatexto;
        case 2: 
            Diasemanatexto = 'Terça';
            return Diasemanatexto;
        case 3:
            Diasemanatexto = 'quarta';
            return Diasemanatexto;
        case 4:
            Diasemanatexto = 'quinta';
            return Diasemanatexto;
        case 5:
            Diasemanatexto = 'sexta';
            return Diasemanatexto;
        case 6:
            semanatexto = 'sábado';
            return Diasemanatexto;
        default:
            Diasemanatexto = "";
            return Diasemanatexto;
    }
}


const data = new Date('2024-07-30 12:00:00');
const diaSemana = data.getDay();
const semanatexto = getDiaDaSemana(diaSemana);
console.log( diaSemana, semanatexto)


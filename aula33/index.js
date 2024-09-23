const pessoa = {
    nome: "João",
    sobrenome: 'Paulo',
    idade: "36",
    endereco :{
        rua: "Rua campo do bangu",
        numero: "84 a"
    }
}

// const {nome: n = "padrão"} = pessoa
// const {nome,idade} = pessoa
// const {nome, endereco:{rua, numero}} = pessoa
const {
    endereco:{rua: nomeRua = "", numero},
    endereco
    } = pessoa


 console.log(nomeRua , numero);
 console.log(endereco)

// console.log(nome, idade)
// console.log(` Meu nome é${nome} , moro na  ${rua}, ${numero}`)
// console.log(resto)
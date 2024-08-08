// Objeto

//Objeto literal
// const pessoa1 = {
//     nome: 'Joõa Paulo',
//     sobrenome: 'Santana',
//     idade: 19,
// }

//console.log(pessoa1.nome)


// function criarPessoa(nome,sobrenome,idade){
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// }

// const pessoa1 = criarPessoa('joao', 'santana', 90); // argumento que vai ser passado para funcão CriarPessoa(parametro)
// const pessoa2 = criarPessoa('Junior', 'Biu', 20);

// console.log( `${pessoa1.nome}, ${pessoa2.nome}`)

const pessoa1 = {
    nome: 'João',
    sobrenome: 'Santana',
    idade: 45,
    
    // metódo
    falar() {
        console.log(`A minha idade atual é ${this.idade} `)
    },
    incrementarIdade(){
        this.idade++
    },
}

pessoa1.falar()
pessoa1.incrementarIdade()

pessoa1.falar()
pessoa1.incrementarIdade()

pessoa1.falar()
pessoa1.incrementarIdade()


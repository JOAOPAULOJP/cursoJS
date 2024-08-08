
function meuEscopo (){

    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    function dadosform (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso =  form.querySelector('.peso').value;
        const altura =form.querySelector('.altura').value;
        objetoPessoa = {
            nome,
            sobrenome,
            peso,
            altura,
            toString: function () {
                return ` ${this.nome} ${this.sobrenome} ${this.peso} ${this.altura} `
            }
        }
        pessoas.push(objetoPessoa);
        resultado.innerHTML += `<p>${pessoas}</p>`;
    };

    form.addEventListener('submit', dadosform)
}

meuEscopo();
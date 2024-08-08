/* Ternário
  (condicao) ? 'valor para verdadeiro' : 'Valor para falso'
*/
const pontuacaoUsuario = 1000;
const nivelUsario = pontuacaoUsuario >= 1000 ? 'Usuário vip' : 'Usuário Normal' ;

const corUsuario = null;
const corPadrao = corUsuario || 'preto';



console.log(nivelUsario, corPadrao)
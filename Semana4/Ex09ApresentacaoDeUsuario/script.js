/*Declare uma arrowFunction que deverá possuir dois parâmetros (nome, idade). 
A nossa função deve mostrar no console a seguinte frase: “Olá, eu sou <nome>, 
e tenho <idade> anos”. */

const listaDePessoas = [{
    nome: 'Pessoa 1',
    idade: 30,
    telefone: 51999999999,
    profissao: 'Programador'
}, {
    nome: 'Pessoa 2',
    idade: 17,
    telefone: 51999999909,
    profissao: 'adolescente'
}, {
    nome: 'Pessoa 3',
    idade: 40,
    telefone: 5199999991,
    profissao: 'criar adolescente'
}]

listaDePessoas.map(pessoa =>
    console.log(`Olá, eu sou ${pessoa.nome}, e tenho ${pessoa.idade} anos.`)
);
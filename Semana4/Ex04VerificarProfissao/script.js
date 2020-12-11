/* Considerando a mesma entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO 
crie uma função que receba uma lista de pessoas e descubra se todas as pessoas da lista
 possuem a profissão “Programador” retornando o resultado.*/


//EVERY

const pessoa = [{
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

const verificarProfissao = pessoa =>
    pessoa.every(pessoa => pessoa.profissao == 'Programador')

console.log(verificarProfissao(pessoa))
/* Novamente considerando a entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO 
crie uma função que receba uma lista de pessoas e retorne uma lista com os nomes  das pessoas.*/


//MAP

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

const encontrarMaiorDeIdade = pessoa =>
    pessoa.find(pessoa => pessoa.idade > 18)

console.log(encontrarMaiorDeIdade(pessoa))
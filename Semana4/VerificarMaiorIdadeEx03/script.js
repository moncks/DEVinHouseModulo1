/*Considerando uma entidade Pessoa que contém os atributos nome, 
idade, telefone e profissão, crie uma função que receba uma lista 
de pessoas e descubra se alguma das pessoas da lista é maior de idade 
(18 anos) retornando o resultado.*/


//FIND

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
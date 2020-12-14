/*Crie uma função que receba uma lista de valores numéricos, 
e utilizando a função reduce imprima a multiplicação dos valores da lista. */

//REDUCE

const valoresMultiplicados = (...numeros) =>
    numeros.reduce((acumulador, atual) => acumulador * atual)

const numerosMultiplicaveis = valoresMultiplicados(1, 2, 10, 20, 100, 200)

console.log('Números Multiplicados: ', numerosMultiplicaveis)
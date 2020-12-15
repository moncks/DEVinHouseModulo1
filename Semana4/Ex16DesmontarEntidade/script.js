/*Considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 
crie uma função que receba um objeto cidade 
e atribua nome e o estado a duas variáveis e imprima elas no console. */


const imprimirCidade = cidade => {
    const { nome, estado } = cidade;
    console.log("Nome: ", nome);
    console.log("Estado: ", estado);
}
const imprimirCidadeComTemplateString = cidade => {
    const { nome, estado } = cidade;
    console.log(`Nome: ${nome} Estado: ${estado}`)
}

const cidade = {
    nome: 'Porto Alegre',
    estado: 'RS'
}

imprimirCidadeComTemplateString(cidade);
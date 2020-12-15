/*Novamente considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 
crie uma função que receba uma lista de cidades 
e verifique se alguma das cidades é do estado “RS”, retornando o resultado.*/


const listaDeCidades = [{
        cidade: 'Florianopolis',
        estado: 'SC'
    }, {
        cidade: 'Ararangua',
        estado: 'SC'
    }, {
        cidade: 'Porto Alegre',
        estado: 'RS'
    },
    {
        cidade: 'Caxias do Sul',
        estado: 'RS'
    }
]



const encontrarCidadeDoRS = listaDeCidades =>
    listaDeCidades.find(cidades => cidades.estado === 'RS')

console.log(encontrarCidadeDoRS(listaDeCidades))
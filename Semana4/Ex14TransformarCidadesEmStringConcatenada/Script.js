/*Considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 
crie uma função que recebe uma lista de cidades 
e retorna uma lista com os nomes das cidades concatenados com o seu estado. */

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


listaDeCidades.map(cidades =>
    console.log(`${cidades.cidade}, ${cidades.estado}`))
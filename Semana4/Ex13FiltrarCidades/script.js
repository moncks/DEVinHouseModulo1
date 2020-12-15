/*Considerando uma entidade Cidade,
 contendo os seguintes atributos nome e estado,
 crie uma função que receba uma lista de cidades 
 e retorne a lista de cidades em que o estado seja “SC”. */

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

const encontrarCidadeDeSC = listaDeCidades =>
    listaDeCidades.filter(listaDeCidades => listaDeCidades.estado === 'SC')

console.log(encontrarCidadeDeSC(listaDeCidades))
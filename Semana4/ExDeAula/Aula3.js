// function calcular(operacao, ...numeros) {
//     let resultado = operacao === 'multiplicacao' ? 1 : 0;
//     if (operacao !== 'soma' && operacao !== 'multiplicacao') {
//         return 'Operação desejada não implementada';
//     }
//     numeros.forEach(numero => {
//         if (operacao === 'soma') {
//             resultado += numero;
//         } else if (operacao === 'multiplicacao') {
//             resultado *= numero;
//         }
//     });
//     return resultado;
// 


//Reduce

// const somarArray = (...numeros) =>
//     numeros.reduce((acumulador, corrente) => acumulador + corrente, 0);

// const numerosSomados = somarArray(100, 50, 200, 120);

// console.log('Numeros Somados: ', numerosSomados);


//==================================================================//

const despesas = [{
        descricao: 'Água',
        valor: 60
    },
    {
        descricao: 'Luz',
        valor: 50
    },
    {
        descricao: 'bla!, bla!, bla!',
        valor: 90
    }
]

const valores = despesas.map(despesa => despesa.valor);

const totalGasto = valores.reduce((acumulador, corrente) => acumulador + corrente);

console.log(totalGasto)
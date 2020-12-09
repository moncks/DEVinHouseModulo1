function somar() {
    var soma = 0;
    for (var i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma / arguments.length;
}

var arr = [1, 3, 7, 4, 5, 6];
console.log(`A MÉDIA DA NOTA : ${somar.apply(null, arr)}`);

////////////////////////////////////// ES6

// function somar() {
//     return [...arguments].reduce((sum, nr) => sum + nr, 0);
// }

// var arr = [1, 3, 7, 4, 5, 6];
// console.log(somar(...arr)); // dá 26!



// Crie uma função que receba como parâmetro uma lista de notas e 
// calcule a média dessas notas imprimindo o resultado.